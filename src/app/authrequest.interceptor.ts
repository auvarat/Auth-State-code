import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthrequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      const modifyRequest = request.clone({
        headers: request.headers.set(
          'authorization',
          localStorage.getItem('token') as string
        ),
      });
      return next.handle(modifyRequest);
    }
    return next.handle(request);
  }
}