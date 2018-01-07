import { Component, Input } from '@angular/core';

import { IEntry } from '../../models/entry';
import { IPrediction } from '../../models/tfl-api/prediction';

@Component({
  selector: 'component-departure-item-group',
  templateUrl: 'departure-item-group.html',
})
export class DepartureItemGroupComponent {
  @Input() public entry: IEntry<IPrediction[]>;
}
