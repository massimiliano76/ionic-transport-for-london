import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LinesPage } from './lines';

@NgModule({
  declarations: [
    LinesPage,
  ],
  imports: [
    IonicPageModule.forChild(LinesPage),
  ],
})
export class LinesPageModule { }
