import { Component } from '@angular/core';
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
} from 'ionic-angular';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

import { ILine } from '../../models/tfl-api/line';
import { ILineStatus } from '../../models/tfl-api/line-status';
import { IStopPoint } from '../../models/tfl-api/stop-point';
import { LineProvider } from '../../providers/tfl-api/line/line';

@IonicPage()
@Component({
  selector: 'page-line',
  templateUrl: 'line.html',
})
export class LinePage {
  public line: ILine;
  public lineStatuses: ILineStatus[];
  public stopPoints: IStopPoint[];

  constructor(
      private lineProvider: LineProvider,
      private loadingCtrl: LoadingController,
      private navCtrl: NavController,
      private navParams: NavParams,
  ) {
    this.line = navParams.data.line;
  }

  private ionViewWillEnter() {
    const LOADING = this.loadingCtrl.create({
      cssClass: 'transparent',
    });

    LOADING.present();

    Observable.forkJoin(
        this.lineProvider.getLineStatuses(this.line.id),
        this.lineProvider.getStopPointsByLine(this.line.id),
    ).first().subscribe((response: [ILineStatus[], IStopPoint[]]) => {
      this.lineStatuses = response[0];
      this.stopPoints = response[1];

      LOADING.dismiss();
    });
  }
}
