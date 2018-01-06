import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TflApiInterceptor implements HttpInterceptor {
  public intercept(
      req: HttpRequest<any>,
      next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      params: req.params
      .set('app_id', '6b52d4ed')
      .set('app_key', '1b13d7f40ffa679ad8ff29052ae936a9'),
    }));
  }
}
