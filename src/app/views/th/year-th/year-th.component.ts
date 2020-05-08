import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-year-th',
  templateUrl: './year-th.component.html',
  styleUrls: ['./year-th.component.css']
})
export class YearThComponent implements OnInit {

  month: string;
  year: string;
  monthTH: string;

  mDataArray: any[] = [];
  img: any[] = [];
  baseUrl : string = environment.baseUrl;
  node_static_url: string  = environment.backendUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private rest: RestService,
  ) { }


  async ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      this.month = params.month
      this.year = params.year
    })

    var _month = "";
    if (this.month == 'มกราคม') {
      _month = '1'
      this.monthTH = 'January'

    }
    if (this.month == 'กุมภาพันธ์') {
      _month = '2'
      this.monthTH ='February'
    }
    if (this.month == 'มีนาคม') {

      _month = '3'
      this.monthTH ='March'
    }
    if (this.month == 'เมษายน') {

      _month = '4'
      this.monthTH ='April'
    }
    if (this.month == 'พฤษภาคม') {
      _month = '5'
      this.monthTH ='May'

    }
    if (this.month == 'มิถุนายน') {
      _month = '6'
      this.monthTH ='June'

    }
    if (this.month == 'กรกฎาคม') {
      _month = '7'
      this.monthTH ='July'

    }
    if (this.month == 'สิงหาคม') {
      _month = '8'
      this.monthTH ='August'

    }
    if (this.month == 'กันยายน') {
      _month = '9'
      this.monthTH ='September'

    }
    if (this.month == 'ตุลาคม') {
      _month = '10'
      this.monthTH ='October'

    }
    if (this.month == 'พฤศจิกายน') {
      _month = '11'
      this.monthTH ='November'

    }
    if (this.month == 'ธันวาคม') {
      _month = '12'
      this.monthTH ='December'

    }

    this.mDataArray = await this.rest.getContentByYear(this.year, _month).toPromise();
    for (let index = 0; index < this.mDataArray.length; index++) {
      const id = this.mDataArray[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.img.push(this.node_static_url + "images/" + v.img_header)

    }
  
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
    window.location.href = '/year?month=' +  this.monthTH + '&year=' + this.year

  }
  home() {
    window.location.href = '/th/home';
  }

  preview() {
    window.location.href = '/th/preview';
  }


}
