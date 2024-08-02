import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/user/Models/token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = sessionStorage.getItem('AccessToken');//JSON.parse(token) as Token
    if(token != null){
      const _token = JSON.parse(token) as Token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${_token.token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
