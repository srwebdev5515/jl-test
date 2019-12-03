import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TESTING_AUTH_KEY } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(111111);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${TESTING_AUTH_KEY}`
      },
      url: `${environment.server}/${req.url}`
    });

    return next.handle(req);
  }

}
