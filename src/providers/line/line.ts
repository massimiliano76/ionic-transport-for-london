import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { LineMode } from '../../enums/line-mode';
import { IDisruption } from '../../models/line/disruption';
import { ILine } from '../../models/line/line';
import { ILineStatus } from '../../models/line/line-status';
import { IStopPoint } from '../../models/line/stop-point/stop-point';

@Injectable()
export class LineProvider {
  constructor(private http: HttpClient) { }

  public getDisruptionsByLine(lineId: string): Observable<IDisruption[]> {
    return this.http.get<IDisruption[]>(`https://api.tfl.gov.uk/Line/${lineId}/Disruption`);
  }

  public getDisruptionsByLineDate(
      lineId: string,
      from: Date,
      to: Date,
  ): Observable<IDisruption[]> {
    return this.http.get<IDisruption[]>(`https://api.tfl.gov.uk/Line/${lineId}/Disruption/${from.toISOString().substring(0, 10)}/to/${to.toISOString().substring(0, 10)}`);
  }

  public getDistruptionsByMode(lineMode: LineMode): Observable<IDisruption[]> {
    return this.http.get<IDisruption[]>(`https://api.tfl.gov.uk/Line/Mode/${lineMode}/Disruption`);
  }

  public getDisruptionsByModeDate(
      lineMode: LineMode,
      from: Date,
      to: Date,
  ): Observable<IDisruption[]> {
    return this.http.get<IDisruption[]>(`https://api.tfl.gov.uk/Line/Mode/${lineMode}/Disruption/${from.toISOString().substring(0, 10)}/to/${to.toISOString().substring(0, 10)}`);
  }

  public getLineStatuses(lineId: string): Observable<ILineStatus[]> {
    return this.http.get<ILine[]>(`https://api.tfl.gov.uk/Line/${lineId}/Status`).map((lines: ILine[]) => lines[0].lineStatuses);
  }

  public getLinesByMode(lineMode: LineMode): Observable<ILine[]> {
    return this.http.get<ILine[]>(`https://api.tfl.gov.uk/Line/Mode/${lineMode}`);
  }

  public getStopPointsByLine(lineId: string): Observable<IStopPoint[]> {
    return this.http.get<IStopPoint[]>(`https://api.tfl.gov.uk/Line/${lineId}/StopPoints`);
  }
}
