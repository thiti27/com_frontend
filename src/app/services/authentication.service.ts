import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService

  ) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('trs_CurrentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post<any>(`${environment.URL_LOGIN}`, { username, password })
      .pipe(map(data => {
        let bRC = false;
        let user = {};

        if (!data.userLogin) {
          bRC = false;
        } else {
          bRC = true;

          user = {
            username: data.userLogin?.emId,
            firstname: data.userLogin?.firstnameEn,
            lastname: data.userLogin?.lastnameEn,
            sectionId: data.userLogin?.section?.id,
            sectionName: data.userLogin?.section?.name,
          };

          this.cookieService.set('trs_CurrentUser', JSON.stringify(user), new Date(moment().add(30, 'm').format()), '/', '', false, 'Strict');
          this.cookieService.set('access_token', data.token, new Date(moment().add(30, 'm').format()), '/', '', false, 'Strict');

          this.currentUserSubject.next(user);
        }

        return bRC;
      }));
  }

  getAccessToken = () => {
    return this.cookieService.get('access_token');
  }
  getCoockie(){
    return this.cookieService.get("trs_CurrentUser")
  }

  logout() {
    this.cookieService.deleteAll();
    this.currentUserSubject.next(null);
  }
}