import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private authService: AuthService){}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('Intercepted:', req);
		// const copiedReq = req.clone({headers: req.headers.append('','')});
		const copiedReq = req.clone({params: req.params.set('auth',this.authService.getToken())});
		return next.handle(copiedReq);
	}
}