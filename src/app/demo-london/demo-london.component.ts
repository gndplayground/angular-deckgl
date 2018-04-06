import { Component, OnInit, NgZone, Injectable, ApplicationRef } from '@angular/core';

import { LondonAccidentService } from '../london-accident.service';

@Injectable()
@Component({
  selector: 'app-demo-london',
  templateUrl: './demo-london.component.html',
  styleUrls: ['./demo-london.component.css']
})
export class DemoLondonComponent implements OnInit {
  data;
  deckViewPort;
  mapHeight: number;
  mapWidth: number;

  constructor(private londonAccidentService: LondonAccidentService, private ngZone: NgZone, private ref: ApplicationRef) { }

  ngOnInit() {
    this.londonAccidentService.getDataAccident().then((data) => {
      this.data = data;
    }).catch((e) => {
      console.log(e);
    });
  }

  onMapChangeSize(data: {mapWidth, mapHeight}) {
    this.mapWidth = data.mapWidth;
    this.mapHeight = data.mapHeight;
  }

  onViewPortChange = (viewport) => {
    // this.ngZone.run(() => {
    //   this.deckViewPort = viewport;
    // });
    this.deckViewPort = viewport;
    this.ref.tick();
  }
}
