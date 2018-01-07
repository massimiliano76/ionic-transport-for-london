import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { ILineStatus } from '../../models/tfl-api/line-status';

@IonicPage()
@Component({
  selector: 'page-line-status',
  templateUrl: 'line-status.html',
})
export class LineStatusPage {
  public lineStatus: ILineStatus;

  constructor(private navParams: NavParams) {
    this.lineStatus = navParams.data.lineStatus;
  }
}
