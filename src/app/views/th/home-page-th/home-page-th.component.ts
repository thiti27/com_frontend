import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from '../../../services/rest.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-home-page-th',
  templateUrl: './home-page-th.component.html',
  styleUrls: ['./home-page-th.component.css']
})
export class HomePageThComponent implements OnInit {
  baseUrl : string = environment.baseUrl;
  node_static_url: string  = environment.backendUrl;
  com_id;
  com_news;
  com_news_detail;
  com_img;
  com_date;
  csr_id;
  csr;
  csr_img;
  csr_detail;
  csr_date;
  events;
  events_img;
  events_id;
  events_detail;
  events_date;
  mobile = false;
  lastest: any[] = [];
  img: any[] = [];
  constructor(private rest: RestService, private router: Router) {
  }
  async ngOnInit() {
    if (window.screen.width < 640) { // 768px portrait
      this.mobile = true;
    
    }
    else {
      this.mobile = false;
    }

    const last = await this.rest.getContentLastest().toPromise();
    this.lastest = last;
    for (let index = 0; index < last.length; index++) {
      const id = JSON.stringify(last[index].event_id);
      const v = await this.rest.getImageById(id).toPromise();
      this.img.push(this.node_static_url + "images/" + v.img_header);
    }
    var swiper = new Swiper('.swiper-container', {
      speed: 2000,
      // loop:true,
      parallax: true,
      // fadeEffect: {
      //   crossFade: true
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
    const res = await this.rest.getMainContentByType().toPromise();
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      const values = Object.keys(element).map(key => element[key]);
      const commaJoinedValues = values;
      if (index == 0) {
        this.com_id = commaJoinedValues[0].event_id;
        this.com_news = commaJoinedValues[0].event_name_th;
        this.com_news_detail = commaJoinedValues[0].content_detail_th;
        this.com_date = commaJoinedValues[0].post_date;
        const v = await this.rest.getImageById(this.com_id).toPromise();
        this.com_img = this.node_static_url + "images/" + v.img_header;
      }
      if (index == 1) {
        this.csr_id = commaJoinedValues[0].event_id;
        this.csr = commaJoinedValues[0].event_name_th;
        this.csr_detail = commaJoinedValues[0].content_detail_th;
        this.csr_date = commaJoinedValues[0].post_date;
        const v = await this.rest.getImageById(this.csr_id).toPromise();
        this.csr_img = this.node_static_url + "images/" + v.img_header;
      }
      if (index == 2) {
        this.events_id = commaJoinedValues[0].event_id;
        this.events = commaJoinedValues[0].event_name_th;
        this.events_detail = commaJoinedValues[0].content_detail_th;
        this.events_date = commaJoinedValues[0].post_date;
        const v = await this.rest.getImageById(this.events_id).toPromise();
        this.events_img = this.node_static_url + "images/" + v.img_header;
      }
    }
  }
  aboutUs() {
    window.location.href = '/th/about-us';
  }
  products() {
    window.location.href = '/th/products';
  }
  daicel_group() {
    window.location.href = '/th/daicel-group';
  }
  csr_page() {
    window.location.href = '/th/csr';
  }
  news_events() {
    window.location.href = '/th/news-events';
  }
  contact_us() {
    window.location.href = '/th/contact-us';
  }
  th() {
    window.location.href = 'home';
  }
  home() {
    window.location.href = '/th/home';
  }
  preview(data) {
    window.location.href = '/th/preview?id=' + data;
  }
}

