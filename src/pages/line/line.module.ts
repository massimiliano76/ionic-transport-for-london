import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { LinePage } from './line';

@NgModule({
  declarations: [
    LinePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LinePage),
  ],
})
export class LinePageModule { }
