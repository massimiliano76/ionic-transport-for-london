import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEnGb from '@angular/common/locales/en-GB';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { InterceptorModule } from '../interceptors/interceptor.module';
import { LineProvider } from '../providers/tfl-api/line/line';
import { StopPointProvider } from '../providers/tfl-api/stop-point/stop-point';
import { MyApp } from './app.component';

registerLocaleData(localeEnGb);

@NgModule({
  bootstrap: [
    IonicApp,
  ],
  declarations: [
    MyApp,
  ],
  entryComponents: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    IonicModule.forRoot(MyApp),
  ],
  providers: [
    LineProvider,
    StatusBar,
    SplashScreen,
    StopPointProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'en-GB' },
  ],
})
export class AppModule { }
