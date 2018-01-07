import { Component, Input } from '@angular/core';

import { IPrediction } from '../../models/tfl-api/prediction';

@Component({
  selector: 'component-departure-item',
  templateUrl: 'departure-item.html',
})
export class DepartureItemComponent {
  @Input() public departure: IPrediction;

  public convertSecondsToMinutes(seconds: number): number {
    return Math.round(seconds / 60);
  }
}
