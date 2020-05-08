import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
    window.location.href='/th/products';

  }
  home () {
    window.location.href='/home';

  }
}
