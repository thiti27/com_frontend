import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-about-us-th',
  templateUrl: './about-us-th.component.html',
  styleUrls: ['./about-us-th.component.css']
})
export class AboutUsThComponent implements OnInit {

  constructor(private router: Router) {}

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
    window.location.href='/about-us';

  }
  home () {
    window.location.href='/th/home';
  }



}
