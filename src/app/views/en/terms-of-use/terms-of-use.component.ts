import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

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
    window.location.href = '/th/terms-of-use';

  }
  home() {
    window.location.href = '/home';

  }


}
