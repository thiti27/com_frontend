import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-th',
  templateUrl: './contact-us-th.component.html',
  styleUrls: ['./contact-us-th.component.css']
})
export class ContactUsThComponent implements OnInit {

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
    window.location.href='/contact-us';

  }
  home () {
    window.location.href='/th/home';
  }




}
