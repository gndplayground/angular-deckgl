import { Injectable } from '@angular/core';
import { csv as requestCsv } from 'd3-request';

const DATA_URL =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv';

@Injectable()
export class LondonAccidentService {

  constructor() { }

  getDataAccident(): Promise<{}> {
    return new Promise((resolve, reject) => {
      requestCsv(DATA_URL, (error, response) => {
        if (!error) {
          const data = response.map(d => [Number(d.lng), Number(d.lat)]);
          resolve(data);
        }
        reject(error);
      });
    });
  }
}
