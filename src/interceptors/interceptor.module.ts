import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TflApiInterceptor } from './tfl-api/tfl-api';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TflApiInterceptor, multi: true },
  ],
})
export class InterceptorModule { }
