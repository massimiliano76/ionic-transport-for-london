import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ILineStatus } from '../../models/tfl-api/line-status';

@Component({
  selector: 'component-line-status-item',
  templateUrl: 'line-status-item.html',
})
export class LineStatusItemComponent {
  @Input() public lineStatus: ILineStatus;

  constructor(private navCtrl: NavController) { }

  public openLineStatus() {
    this.navCtrl.push('LineStatusPage', { lineStatus: this.lineStatus });
  }
}
