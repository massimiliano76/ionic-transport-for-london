import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { StopPointPage } from './stop-point';

@NgModule({
  declarations: [
    StopPointPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StopPointPage),
    PipesModule,
  ],
})
export class StopPointPageModule { }
