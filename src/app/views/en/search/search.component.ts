import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  keyword: string;
  found: string;
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
      this.keyword = params.keyword

    })


    this.mDataArray = await this.rest.getContentByKeyword(this.keyword).toPromise();

    if (this.mDataArray.length == 0) {
      this.found = 'no'
    }
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
    window.location.href = '/th/search?keyword=' + this.keyword;

  }
  home() {
    window.location.href = '/home';
  }

  preview() {
    window.location.href = '/preview';
  }

}
