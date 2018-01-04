import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { IPage } from '../models/page';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = 'HomePage';

  public pages: IPage[];

  constructor(
      private platform: Platform,
      private statusBar: StatusBar,
      private splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    this.pages = [
      { component: 'HomePage', icon: 'home', title: 'Home' },
    ];
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
