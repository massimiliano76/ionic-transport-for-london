import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as _ from 'underscore';
import { IPrediction } from '../../../models/tfl-api/prediction';

@Injectable()
export class StopPointProvider {
  constructor(private http: HttpClient) { }

  public getDeparturesByStopPoint(naptanId: string): Observable<IPrediction[]> {
    return this.http.get<IPrediction[]>(`https://api.tfl.gov.uk/StopPoint/${naptanId}/Arrivals`);
  }

  public getDeparturesByStopPointGroupByPlatformName(naptanId: string): Observable<Map<string, IPrediction[]>> {
    return this.getDeparturesByStopPoint(naptanId)
    .map((departures: IPrediction[]) => {
      const GROUPED_DEPARTURES = _.groupBy(departures, 'platformName');

      const MAP: Map<string, IPrediction[]> = new Map();

      Object.keys(GROUPED_DEPARTURES).forEach((key: string) => {
        MAP.set(key, _.sortBy(GROUPED_DEPARTURES[key], 'timeToStation'));
      });

      return MAP;
    });
  }
}
