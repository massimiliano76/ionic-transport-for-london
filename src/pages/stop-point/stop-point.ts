import { Component } from '@angular/core';
import {
  IonicPage,
  LoadingController,
  NavParams,
  Refresher,
} from 'ionic-angular';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

import { IPrediction } from '../../models/tfl-api/prediction';
import { IStopPoint } from '../../models/tfl-api/stop-point';
import { StopPointProvider } from '../../providers/tfl-api/stop-point/stop-point';

@IonicPage()
@Component({
  selector: 'page-stop-point',
  templateUrl: 'stop-point.html',
})
export class StopPointPage {
  public departures: Map<string, IPrediction[]> = new Map();
  public stopPoint: IStopPoint;

  constructor(
      private loadingCtrl: LoadingController,
      private navParams: NavParams,
      private stopPointProvider: StopPointProvider,
  ) {
    this.stopPoint = navParams.data.stopPoint;
  }

  public doRefresh(refresher: Refresher) {
    this.updateDepartures().first().subscribe(() => refresher.complete());
  }

  private ionViewWillEnter() {
    const LOADING = this.loadingCtrl.create({
      cssClass: 'transparent',
    });

    LOADING.present();

    this.updateDepartures().first().subscribe(() => LOADING.dismiss());
  }

  private updateDepartures(): Observable<any> {
    return this.stopPointProvider
    .getDeparturesByStopPointGroupByPlatformName(this.stopPoint.stationNaptan)
    .map((departures: Map<string, IPrediction[]>) =>
        this.departures = departures,
    );
  }
}
