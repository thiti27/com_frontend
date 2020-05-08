import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { contentModel } from '../models/content';
import { imagesModel } from '../models/images';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  public readonly USERLOGIN: UserModel = this.authenticationService.currentUserValue;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  findByIdAll = (id?: number) => {
    return this.http.get<imagesModel>(`${environment.URL_IMG}all/${id}`);
  };
  findByIdHeader = (id?: number) => {
    return this.http.get<imagesModel>(`${environment.URL_IMG}header/${id}`);
  };

  delete = (id: string) => {
    return this.http.delete<any>(`${environment.URL_IMG}${id}`);
  };
  
  addImg(img) {
    return this.http.post<any>(`${environment.URL_IMG}img`,img);
  };
  addImgdb(data){    
    return this.http.post<any>(`${environment.URL_IMG}db`, data);
  }

};



