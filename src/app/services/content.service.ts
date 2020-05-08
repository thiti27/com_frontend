import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { contentModel } from '../models/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public readonly USERLOGIN: UserModel = this.authenticationService.currentUserValue;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  find = () => {
    return this.http.get<contentModel>(`${environment.URL_POST}`);
  };

  findById = (id?: number) => {
    return this.http.get<contentModel>(`${environment.URL_POST}${id}`);
  };
  updateContent(data) {
    return this.http.put<any>(`${environment.URL_POST}updateContent`, data);
  }

  addContent(data1) {
    data1['post_by'] = this.USERLOGIN.firstname
    alert(JSON.stringify(data1))
    return this.http.post<any>(`${environment.URL_POST}`, data1);
  }

  delete = (id: number) => {
    return this.http.delete<any>(`${environment.URL_POST}deleteContent/${id}`);
  };

  getContentBydate(id: string) {
    const url = `${environment.URL_POST}getDate/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getContentByKeyword(keyword: String) {
    const url = `${environment.URL_POST}keyword/${keyword}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getContentByType(id: string) {
    const url = `${environment.URL_POST}getType/${id}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  autoMainContent() {
    const url = `${environment.URL_POST}updateAuto`;
    return this.http.put<any>(url, { headers: this.headers });
  }
  getMainContentByType() {
    const url = `${environment.URL_POST}getMain`;
    return this.http.post<any>(url, { headers: this.headers });
  }

  updateType(data) {
    const url = `${environment.URL_POST}updateType`;
    return this.http.put<any>(url, data);
  }

  getContentByKeywordChoose(keyword : String,type : String) {
    const url = `${environment.URL_POST}keyword/${keyword}/${type}`;
    return this.http.get<any[]>(url);    
  }

  getContentBydateType(keyword : String,type : String) {
    const url = `${environment.URL_POST}getDate/${keyword}/${type}`;
    return this.http.get<any[]>(url);
  }

  getRecent() {
    const url =  `${environment.URL_POST}recent`;
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getMonth() {
    const url =  `${environment.URL_POST}month`;
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getStartYear() {
    const url =  `${environment.URL_POST}start`;
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getEndYear() {
    const url =  `${environment.URL_POST}end`;
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getContentByYear(y : String,m : String) {
    const data  = y+','+m;
    const url =  `${environment.URL_POST}year/${data}`;;
    return this.http.get<any>(url, {headers: this.headers});    
  }

}
