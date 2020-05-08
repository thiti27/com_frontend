import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from '../app/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private cookieService: CookieService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.authenticationService.getAccessToken();
        const currentUser = this.authenticationService.currentUserValue;

        this.cookieService.set('access_token', accessToken, new Date(moment().add(3, 'h').format()), '/', '', false, 'Strict');
        this.cookieService.set('trs_CurrentUser', JSON.stringify(currentUser), new Date(moment().add(3, 'h').format()), '/', '', false, 'Strict');

        req = req.clone({
            setHeaders: {
                Authorization: `JWT ${accessToken}`
            }
        });
        return next.handle(req);
    }
}