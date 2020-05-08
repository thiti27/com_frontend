import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route, NavigationExtras } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-preview-en',
  templateUrl: './preview-en.component.html',
  styleUrls: ['./preview-en.component.css']
})
export class PreviewEnComponent implements OnInit {
  data: [];
  id: string;
  imgHeader: string = '';
  imgAll: [];
  imgAll1: Array<object> = [];
  imgAll2: Array<object> = [];
  title: string = '';
  detail: string = '';
  typeContent: string = '';

  dateActivity: string = '';
  datePublish: string = '';
  comNews: string = '';
  csr: string = '';
  event: string = '';
  type: string = '';
  recent: [];
  node_static_url: string = environment.backendUrl;
  year: string[] = [];
  startMonth: number[] = [];
  endMonth: number[] = [];
  month: string[] = [];
  mlength: number[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private rest: RestService,
  ) { }


  async ngOnInit() {

    this.route.queryParams.subscribe(async (params) => {
      this.id = params.id
    })
    const start = await this.rest.getStartYear().toPromise();
    const end = await this.rest.getEndYear().toPromise();
    var yearAll = parseInt(end[0]) - parseInt(start[0]) + 1;

    var m: string[]
    m = await this.rest.getMonth().toPromise();
    for (let i = 0; i < yearAll; i++) {
      this.year.push((parseInt(start[0]) + i).toString());
    }

    // m.reverse();

    for (let i = 0; i < m.length; i++) {

      var spl = m[i].toString().split(",")
      this.mlength.push(spl.length);
      for (let j = 0; j < spl.length; j++) {
      
        if (spl[j] == '1') {
          this.month.push('January');
        }
        if (spl[j] == '2') {
          this.month.push('February');
        }
        if (spl[j] == '3') {
          this.month.push('March');
        }
        if (spl[j] == '4') {
          this.month.push('April');
        }
        if (spl[j] == '5') {
          this.month.push('May');
        }
        if (spl[j] == '6') {
          this.month.push('June');
        }
        if (spl[j] == '7') {
          this.month.push('July');
        }
        if (spl[j] == '8') {
          this.month.push('August');
        }
        if (spl[j] == '9') {
          this.month.push('September');
        }
        if (spl[j] == '10') {
          this.month.push('October ');
        }
        if (spl[j] == '11') {
          this.month.push('November');
        }
        if (spl[j] == '12') {
          this.month.push('December');
        }
        if (spl[j] == '') {
          this.month.push('no');

        }

      }

    }
    var stMonth = 0;
    for (let i = 0; i < m.length; i++) {

      if (i == 0) {
        this.startMonth.push(0)
        this.endMonth.push(this.mlength[i])
      }
      else {
        this.startMonth.push(this.endMonth[i - 1])
        this.endMonth.push(this.endMonth[i - 1] + this.mlength[i])
      }
    }


    const res = await this.rest.getContentById(this.id).toPromise();
    this.title = res.event_name_en
    this.detail = res.content_detail_en
    this.datePublish = res.published_date
    const v = await this.rest.getImageById(this.id).toPromise();
    this.imgHeader = this.node_static_url + "images/" + v.img_header
    this.comNews = res.com_news
    this.csr = res.csr
    this.event = res.events
    this.imgAll = v.img_all

    this.recent = await this.rest.getRecent().toPromise();
    this.setTag()
    this.setData()
  }


  setData() {

    let devide = Math.ceil(this.imgAll.length / 2)
    let col1 = devide;
    let col2 = this.imgAll.length - devide;
    for (var i = 0; i < col1; i++) {
      this.imgAll1.push(this.imgAll[i])
    }
    for (var i = col1; i < (col1 + col2); i++) {
      this.imgAll2.push(this.imgAll[i])
    }

  }
  setTag() {
    if (this.comNews == "1") {
      this.comNews = "NEWS "
      this.typeContent = "NEWS "
    }
    if (this.csr == "1") {
      this.csr = "CSR "
      this.typeContent = "CSR "
    }
    if (this.event == "1") {
      this.event = "EVENT "
      this.typeContent = "EVENT "
    }
    if (this.comNews == "0") {
      this.comNews = ""
    }
    if (this.csr == "0") {
      this.csr = ""
    }
    if (this.event == "0") {
      this.event = ""
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
    window.location.href = '/th/preview?id=' +  this.id;

  }
  home() {
    window.location.href = '/home';
  }

  preview(data) {
    
    window.location.href = '/preview?id='+data;
  }

  async onSearch(keyword){
   
    window.location.href = '/search?keyword='+keyword;
  }

  go(j,item){

    window.location.href = '/year?month=' +  j + '&year=' + item

  }

}
