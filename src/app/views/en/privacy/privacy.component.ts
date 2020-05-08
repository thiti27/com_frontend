import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
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
    window.location.href = '/th/privacy-policy';

  }
  home() {
    window.location.href = '/home';

  }


}
