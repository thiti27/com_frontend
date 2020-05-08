import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lat: number = 52.358;
  lng: number = 4.916;
  constructor() { }

  ngOnInit(): void {
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
    window.location.href='/th/contact-us';

  }
  home () {
    window.location.href='/home';

  }


}
