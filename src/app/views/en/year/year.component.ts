import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  month: string;
  monthTH: string;
  year: string;

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
    if (this.month == 'January') {
      _month = '1'
      this.monthTH = 'มกราคม'

    }
    if (this.month == 'February') {
      _month = '2'
      this.monthTH = 'กุมภาพันธ์'

    }
    if (this.month == 'March') {

      _month = '3'
      this.monthTH = 'มีนาคม'
    }
    if (this.month == 'April') {

      _month = '4'
      this.monthTH = 'เมษายน'
    }
    if (this.month == 'May') {
      _month = '5'
      this.monthTH = 'พฤษภาคม'

    }
    if (this.month == 'June') {
      _month = '6'
      this.monthTH = 'มิถุนายน'

    }
    if (this.month == 'July') {
      _month = '7'
      this.monthTH = 'กรกฎาคม'

    }
    if (this.month == 'August') {
      _month = '8'
      this.monthTH = 'สิงหาคม'

    }
    if (this.month == 'September') {
      _month = '9'
      this.monthTH = 'กันยายน'

    }
    if (this.month == 'October') {
      _month = '10'
      this.monthTH = 'ตุลาคม'

    }
    if (this.month == 'November') {
      _month = '11'
      this.monthTH = 'พฤศจิกายน'

    }
    if (this.month == 'December') {
      _month = '12'
      this.monthTH = 'ธันวาคม'

    }
    this.mDataArray = await this.rest.getContentByYear(this.year, _month).toPromise();
    for (let index = 0; index < this.mDataArray.length; index++) {
      const id = this.mDataArray[index].event_id
      const v = await this.rest.getImageById(id).toPromise();
      this.img.push(this.node_static_url + "images/" + v.img_header)

    }

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

    window.location.href = '/th/year?month=' +  this.monthTH + '&year=' + this.year


  }
  home() {
    window.location.href = '/home';
  }

  preview() {
    window.location.href = '/preview';
  }


}
