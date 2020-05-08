import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daicel-group-th',
  templateUrl: './daicel-group-th.component.html',
  styleUrls: ['./daicel-group-th.component.css']
})
export class DaicelGroupThComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    window.location.href='/daicel-group';

  }
  home () {
    window.location.href='/th/home';
  }


}
