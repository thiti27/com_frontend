import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.css']
})
export class CsrComponent implements OnInit {
  constructor(private rest: RestService, private router: Router) {

  }

  mDataArray: any[] = [];
  img: any[] = [];
  baseUrl : string = environment.baseUrl;
  node_static_url: string  = environment.backendUrl;
  imgName = [];
  titleEn: string = '';
  detailEn: string = '';
  titleTh: string = '';
  detailTh: string = '';
  dateActivity: string = '';
  datePublish: string = '';


  async ngOnInit() {
    this.mDataArray = await this.rest.getCSR().toPromise();
    for (let index = 0; index < this.mDataArray.length; index++) {
      const id = this.mDataArray[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.img.push(this.node_static_url + "images/" + v.img_header)
     
    }

  }

 
  aboutUs() {
    window.location.href='/about-us';  
  }
  products(){
    window.location.href='/products';  
  }
  daicel_group(){
    window.location.href='/daicel-group';  
  }
  csr(){
    window.location.href='/csr';  
  }
  news_events(){
    window.location.href='/news-events';  
  }
  contact_us(){
    window.location.href='/contact-us';

  }
  th(){
    window.location.href='/th/csr';

  }
  home () {
    window.location.href='/home';

  }



}
