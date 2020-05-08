import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daicel-group',
  templateUrl: './daicel-group.component.html',
  styleUrls: ['./daicel-group.component.css']
})
export class DaicelGroupComponent implements OnInit {

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
    window.location.href='/th/daicel-group';

  }
  home () {
    window.location.href='/home';

  }

}
