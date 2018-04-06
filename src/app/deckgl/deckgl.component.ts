import { Component, AfterViewInit, Input, Output, OnChanges, NgZone, EventEmitter } from '@angular/core';
import { experimental, GeoJsonLayer } from 'deck.gl/dist-es6/';
import { LineLayer, HexagonLayer } from 'deck.gl/dist-es6/core-layers';

const { DeckGLJS, MapControllerJS } = experimental;

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

const LIGHT_SETTINGS = {
  lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.2,
  lightsStrength: [0.8, 0.0, 0.8, 0.0],
  numberOfLights: 2,
};

const elevationScale = { min: 1, max: 50 };


@Component({
  selector: 'app-deckgl',
  templateUrl: './deckgl.component.html',
  styleUrls: ['./deckgl.component.css']
})

export class DeckglComponent implements AfterViewInit, OnChanges {

  @Input() data: Array<{}>;
  @Input() width: number;
  @Input() height: number;
  @Input() glId: string;
  @Output() viewPortChange = new EventEmitter();

  private deckgl;
  private controller;
  private intervalTimer;
  private elevationScale = elevationScale.min;

  private viewport = {
    latitude: 52,
    longitude: -0.4,
    zoom: 7,
    pitch: 20,
    bearing: 0,
    width: this.width,
    height: this.height,
  };

  constructor(public ngZone: NgZone) {
    this.elevationScale = 1;
  }

  ngOnChanges(changes) {
    if (this.deckgl) {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this.updateLayers();

          if (changes.data) {
            this.startAnimate();
          }
        });
      });
    }
  }

  startAnimate() {
    this.intervalTimer = window.setInterval(this.animateHeight, 20);
  }

  animateHeight = () => {
    if (this.elevationScale === elevationScale.max) {
      this.stopAnimate();
    } else {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this.elevationScale = this.elevationScale + 1;
          this.updateLayers();
        });
      });
    }
  };

  stopAnimate() {
    window.clearTimeout(this.intervalTimer);
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
        this.deckgl = new DeckGLJS({
          ...this.viewport,
          debug: true,
          layers: [],
          canvas: document.getElementById(this.glId),
          width: this.width || 500,
          height: this.height || 500,
        });

        this.deckgl.canvas.style.position = 'absolute';
        this.deckgl.canvas.style.top = '0';
        this.deckgl.canvas.style.left = '0';
        this.deckgl.canvas.style.width = '100%';
        this.deckgl.canvas.style.height = '100%';

        this.controller = new MapControllerJS({
          canvas: this.deckgl.canvas,
          ...this.viewport,
          onViewportChange: this.onViewportChange,
          width: this.width || 500,
          height: this.height || 500,
        });
        this.updateLayers();
    });
  }

  onViewportChange = (viewport): void => {
    this.viewport = viewport;
    this.deckgl.setProps(viewport);
    this.controller.setProps(viewport);
    this.updateLayers();
    this.ngZone.runOutsideAngular(() => {
      this.viewPortChange.emit(viewport);
    });
  }


  updateLayers() {
    if (this.deckgl) {
      const layers = [
        new LineLayer({
          id: 'line-layer',
          strokeWdith: 10,

          data: [
            {
              sourcePosition: [52, 22.3379040],
              targetPosition: [52, 100],
              color: [255, 0, 0],
            },
            {
              sourcePosition: [-0.4, 22.3379040],
              targetPosition: [-0.4, 100],
              color: [255, 0, 0],
            },
          ],
        }),
      ];

      if (this.data && this.data.length > 0) {
        layers.push(
          new HexagonLayer({
            data: this.data,
            id: 'heatmap',
            colorRange,
            coverage: 1,
            lightSettings: LIGHT_SETTINGS,
            elevationRange: [0, 3000],
            elevationScale: this.elevationScale,
            extruded: true,
            getPosition: d => d,
            opacity: 1,
            radius: 1000,
            upperPercentile: 100,
          }),
        );
      }

      const w = this.width;
      const h = this.height;
      this.ngZone.runOutsideAngular(() => {
        this.deckgl.setProps({
          layers,
          width: w,
          height: h,
        });
      });
    }
  }
}
