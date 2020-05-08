import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostUrl : string  = environment.backendUrl;
  private authenApiUrl = `${this.hostUrl}api/v2/authen`;
  private imageApiUrl = `${this.hostUrl}api/v2/image`;
  private postApiUrl = `${this.hostUrl}api/v2/post`;
  private loginUrl = `${this.authenApiUrl}/login`;
  private imageUrl = `${this.imageApiUrl}/img`;
  private typeUrl = `${this.postApiUrl}/type`;
  private mainUrl = `${this.postApiUrl}/main`;
  private autoUrl = `${this.postApiUrl}/auto`;
  private postUrl = `${this.postApiUrl}/post`;
  private dateUrl = `${this.postApiUrl}/date`;
  private lastUrl = `${this.postApiUrl}/last`;
  private imagedbUrl = `${this.imageApiUrl}/db`;
  private csrUrl = `${this.postApiUrl}/csr`;
  private newsUrl = `${this.postApiUrl}/news`;
  private eventsUrl = `${this.postApiUrl}/events`;
  allData =  [];
  constructor(private http: HttpClient,
    private cookieService: CookieService) 
  { 

  }

  
  // isLoggedIn() {
  //   let loginResult = localStorage.getItem(environment.loginResult);
  //   this.cookieService.set("userId",(environment.loginResult));
  //   console.log(JSON.stringify(environment.loginResult))
  //   // console.log(this.cookieService.get("userId"))
  //   // return true
  // }

  setCoockie(username){
    this.cookieService.set("user",username);
    this.cookieService.set("loginResult", "ok");
  }
  getCoockie(){
    return this.cookieService.get("user")
  }
  deleteCoockie(){
    this.cookieService.deleteAll();
  }
  isLoggedIn() {
    let loginResult = this.cookieService.get("loginResult") ;
    return (loginResult != null && loginResult == 'ok')
  }

  login(usernamePassword) {
    return this.http.post<any>(this.loginUrl, usernamePassword, { headers: this.headers })
  }

  addImg(img) {
    return this.http.post<any>(this.imageUrl, img);
  }

  deleteImg(id) {
    const url = `${this.imageUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.headers });
  }

  addContent(data){    
    return this.http.post<any>(this.postUrl, data);
  }

  addImgdb(data){    
    return this.http.post<any>(this.imagedbUrl, data);
  }

  deleteContent(id){    
    const url = `${this.postUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.headers });
  }

  getContent(){
    return this.http.get<any[]>(this.postUrl, {headers: this.headers})
  }

  getContentById(id:string) {
    const url = `${this.postUrl}/${id}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  updateContent(data){           
    return this.http.put<any>(this.postUrl, data);
  }
  
  getImageById(id:string) {
    const url = `${this.imageUrl}/${id}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getContentByType(id:string) {
    const url = `${this.typeUrl}/${id}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  updateType(data){           
    return this.http.put<any>(this.typeUrl, data);
  }

  getMainContentByType() {
    const url = `${this.mainUrl}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }

  autoMainContent() {
    const url = `${this.autoUrl}`; 
    return this.http.put<any>(url, {headers: this.headers});    
  }
  getContentBydate(id:string) {
    const url = `${this.dateUrl}/${id}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getContentByKeyword(keyword : String) {

    const url = `${this.postUrl}/keyword/${keyword}`;
    return this.http.get<any[]>(url);    
  }

  getContentLastest() {
    const url = `${this.lastUrl}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getCSR() {
    const url = `${this.csrUrl}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getNews() {
    const url = `${this.newsUrl}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getEvents() {
    const url = `${this.eventsUrl}`; 
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getRecent() {
    const url =  `${this.postApiUrl}/recent`;
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getMonth() {
    const url =  `${this.postApiUrl}/month`;
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getStartYear() {
    const url =  `${this.postApiUrl}/start`;
    return this.http.get<any>(url, {headers: this.headers});    
  }
  getEndYear() {
    const url =  `${this.postApiUrl}/end`;
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getContentByYear(y : String,m : String) {
    const data  = y+','+m;
    const url =  `${this.postApiUrl}/year/${data}`;;
    return this.http.get<any>(url, {headers: this.headers});    
  }

  getContentByKeywordChoose(keyword : String,type : String) {
    const url = `${this.postUrl}/keyword/${keyword}/${type}`;
    return this.http.get<any[]>(url);    
  }



}

