import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from '../../../services/rest.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private rest: RestService, private router: Router) {

  }

  last: any[] = [];
  news: any[] = [];
  events: any[] = [];
  imgLast: any[] = [];
  imgNews: any[] = [];
  imgEvents: any[] = [];
  baseUrl : string = environment.baseUrl;
  node_static_url: string  = environment.backendUrl;

  async ngOnInit() {
    this.last = await this.rest.getContentLastest().toPromise();
    for (let index = 0; index < this.last.length; index++) {
      const id = this.last[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.imgLast.push(this.node_static_url + "images/" + v.img_header)
     
    }
    this.news = await this.rest.getNews().toPromise();
    for (let index = 0; index < this.news.length; index++) {
      const id = this.news[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.imgNews.push(this.node_static_url + "images/" + v.img_header)
     
    }
    this.events = await this.rest.getEvents().toPromise();
    for (let index = 0; index < this.events.length; index++) {
      const id = this.events[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.imgEvents.push(this.node_static_url + "images/" + v.img_header)
      
     
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
    window.location.href='/th/news-events';

  }
  home () {
    window.location.href='/home';

  }


}
