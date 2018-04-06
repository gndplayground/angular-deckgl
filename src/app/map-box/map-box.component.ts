import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  NgZone,
  Output,
  EventEmitter,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as debounce from 'lodash.debounce';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent implements AfterViewInit, OnDestroy, OnChanges {
  map;
  mapWidth: number;
  mapHeight: number;

  @Input() viewport;
  @Input() mapName: string;
  @Output() mapSizeChange = new EventEmitter();

  onDebounceResize;

  constructor(public ngZone: NgZone) {
    this.onDebounceResize = debounce(this.onResize, 10);
    window.addEventListener('resize', this.onDebounceResize);
  }

  onResize = () => {
    if (this.map) {
      const c = this.map.getCanvas();
      this.mapHeight = c.height;
      this.mapWidth = c.width;
      this.mapSizeChange.emit({
        mapHeight: this.mapHeight,
        mapWidth: this.mapWidth,
      });
    }
  }

  ngOnChanges(changes) {
    if (this.map && changes.viewport) {
      const {
        zoom,
        bearing,
        pitch,
        longitude,
        latitude,
        maxZoom,
        minZoom,
      } = this.viewport;
      this.map.flyTo({
        duration: 0,
        bearing,
        pitch,
        zoom,
        maxZoom,
        minZoom,
        center: [longitude, latitude]
      });
    }
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lhbmduZ3V5ZW5kZXYiLCJhIjoiY2pmbXRmMGgwMHp2MjMzbXNnY2xmazB5ZyJ9.iK3EVwAZPCHNYUqIVzR6EQ';
        this.map = new mapboxgl.Map({
          container: this.mapName,
          style: 'mapbox://styles/mapbox/dark-v9',
          center: [-0.4, 52],
          zoom: 7,
          pitch: 20,
        });
        const c = this.map.getCanvas();
        this.mapHeight = c.height;
        this.mapWidth = c.width;
        this.mapSizeChange.emit({
          mapHeight: this.mapHeight,
          mapWidth: this.mapWidth,
        });
      });
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onDebounceResize);
  }
}
