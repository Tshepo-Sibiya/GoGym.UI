import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/app/user/Models/token';
import { AuthService } from 'src/app/user/Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService.checkTokenValidity();
    const token =  this.authService.getToken();//JSON.parse(token) as Token
    if(token != null){
      const _token = token;
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${_token}`,
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
