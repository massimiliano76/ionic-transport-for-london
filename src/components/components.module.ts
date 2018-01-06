import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { LineStatusItemComponent } from './line-status-item/line-status-item';
import { StopPointItemComponent } from './stop-point-item/stop-point-item';

@NgModule({
  declarations: [
    LineStatusItemComponent,
    StopPointItemComponent,
  ],
  exports: [
    LineStatusItemComponent,
    StopPointItemComponent,
  ],
  imports: [ IonicModule ],
})
export class ComponentsModule { }
