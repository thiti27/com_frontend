import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from '../../../services/rest.service';
@Component({
  selector: 'app-csr-th',
  templateUrl: './csr-th.component.html',
  styleUrls: ['./csr-th.component.css']
})
export class CsrThComponent implements OnInit {
  constructor(private rest: RestService, private router: Router) {

  }

  mDataArray: any[] = [];
  img: any[] = [];
  baseUrl : string = environment.baseUrl;
  node_static_url: string  = environment.backendUrl;

  async ngOnInit() {
    this.mDataArray = await this.rest.getCSR().toPromise();
    for (let index = 0; index < this.mDataArray.length; index++) {
      const id = this.mDataArray[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.img.push(this.node_static_url + "images/" + v.img_header)
     
    }

  }

  aboutUs() {
    window.location.href='/th/about-us';  
  }
  products(){
    window.location.href='/th/products';  
  }
  daicel_group(){
    window.location.href='/th/daicel-group';  
  }
  csr(){
    window.location.href='/th/csr';  
  }
  news_events(){
    window.location.href='/th/news-events';  
  }
  contact_us(){
    window.location.href='/th/contact-us';

  }
  th(){
    window.location.href='/csr';

  }
  home () {
    window.location.href='/th/home';
  }


}
