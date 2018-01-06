import { Component, Input } from '@angular/core';

import { IStopPoint } from '../../models/line/stop-point/stop-point';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'component-stop-point-item',
  templateUrl: 'stop-point-item.html',
})
export class StopPointItemComponent {
  @Input() public stopPoint: IStopPoint;

  constructor(private navCtrl: NavController) { }

  public openStopPoint() {
    this.navCtrl.push('StopPointPage', { stopPoint: this.stopPoint });
  }
}
