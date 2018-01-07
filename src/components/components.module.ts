import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { PipesModule } from '../pipes/pipes.module';
import { AdditionalPropertiesItemComponent } from './additional-properties-item/additional-properties-item';
import { DepartureItemGroupComponent } from './departure-item-group/departure-item-group';
import { DepartureItemComponent } from './departure-item/departure-item';
import { LineStatusItemComponent } from './line-status-item/line-status-item';
import { StopPointItemComponent } from './stop-point-item/stop-point-item';

@NgModule({
  declarations: [
    AdditionalPropertiesItemComponent,
    DepartureItemGroupComponent,
    DepartureItemComponent,
    LineStatusItemComponent,
    StopPointItemComponent,
  ],
  exports: [
    AdditionalPropertiesItemComponent,
    DepartureItemGroupComponent,
    DepartureItemComponent,
    LineStatusItemComponent,
    StopPointItemComponent,
  ],
  imports: [
    IonicModule,
    PipesModule,
  ],
})
export class ComponentsModule { }
