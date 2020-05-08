import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-th',
  templateUrl: './footer-th.component.html',
  styleUrls: ['./footer-th.component.css']
})
export class FooterThComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  term() {
    window.location.href = '/th/terms-of-use'

  }
  privacy() {
    window.location.href = '/th/privacy-policy'
  }

}
