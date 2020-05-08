import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-th',
  templateUrl: './privacy-th.component.html',
  styleUrls: ['./privacy-th.component.css']
})
export class PrivacyThComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aboutUs() {
    window.location.href = '/about-us';
  }
  products() {
    window.location.href = '/products';
  }
  daicel_group() {
    window.location.href = '/daicel-group';
  }
  csr_page() {
    window.location.href = '/csr';
  }
  news_events() {
    window.location.href = '/news-events';
  }
  contact_us() {
    window.location.href = '/contact-us';

  }
  th() {
    window.location.href = '/privacy-policy'

  }
  home() {
    window.location.href = '/th/home';
  }

  preview() {
    window.location.href = '/th/preview';
  }

}
