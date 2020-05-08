import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-of-use-th',
  templateUrl: './term-of-use-th.component.html',
  styleUrls: ['./term-of-use-th.component.css']
})
export class TermOfUseThComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    window.location.href = '/terms-of-use'

  }
  home() {
    window.location.href = '/th/home';
  }

  preview() {
    window.location.href = '/th/preview';
  }

}
