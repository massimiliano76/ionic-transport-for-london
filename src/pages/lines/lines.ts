import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import 'rxjs/add/operator/first';

import { LineMode } from '../../enums/tfl-api/line-mode';
import { ILine } from '../../models/tfl-api/line';
import { LineProvider } from '../../providers/tfl-api/line/line';

@IonicPage()
@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {
  public lines: ILine[];

  constructor(
      private lineProvider: LineProvider,
      private navCtrl: NavController,
  ) { }

  public openLine(line: ILine) {
    this.navCtrl.push('LinePage', { line });
  }

  private ionViewWillEnter() {
    this.lineProvider.getLinesByMode(LineMode.TUBE).first().subscribe(
        (lines: ILine[]) => this.lines = lines,
    );
  }
}
