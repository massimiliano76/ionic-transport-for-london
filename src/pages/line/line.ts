import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/first';

import { ILine } from '../../models/line/line';
import { ILineStatus } from '../../models/line/line-status';
import { IStopPoint } from '../../models/line/stop-point/stop-point';
import { LineProvider } from '../../providers/line/line';

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
      private navCtrl: NavController,
      private navParams: NavParams,
  ) {
    this.line = navParams.data.line;
  }

  private ionViewWillEnter() {
    this.lineProvider.getLineStatuses(this.line.id).first().subscribe(
        (lineStatuses: ILineStatus[]) => this.lineStatuses = lineStatuses,
    );

    this.lineProvider.getStopPointsByLine(this.line.id).first().subscribe(
        (stopPoints: IStopPoint[]) => this.stopPoints = stopPoints,
    );
  }
}
