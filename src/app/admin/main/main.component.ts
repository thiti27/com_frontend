import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import Swal from 'sweetalert2'
import { contentModel } from '../../models/content';
import { ImagesService } from 'src/app/services/images.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public content: contentModel;
  com_id;
  com_news;
  com_news_detail;
  com_img;
  com_date;
  csr_id;
  csr;
  csr_img;
  csr_detail;
  csr_date;
  events;
  events_img;
  events_id;
  events_detail;
  events_date;
  baseUrl: string = environment.baseUrl;
  node_static_url: string = environment.backendUrl;
  constructor(private contentService: ContentService, private imageService: ImagesService, private router: Router) {

  }

  async ngOnInit() {

    await this.contentService.autoMainContent().toPromise();

    const res = await this.contentService.getMainContentByType().toPromise();
    for (let index = 0; index < res.length; index++) {
      const element = res[index];
      const values = Object.keys(element).map(key => element[key]);
      const commaJoinedValues = values
      if (index == 0) {
        this.com_id = commaJoinedValues[0].event_id
        this.com_news = commaJoinedValues[0].event_name_en
        this.com_news_detail = commaJoinedValues[0].content_detail_en
        this.com_date = commaJoinedValues[0].post_date
        const v = await this.imageService.findByIdHeader(this.com_id).toPromise();
        this.com_img = this.node_static_url + v['img_header']
      }
      if (index == 1) {
        this.csr_id = commaJoinedValues[0].event_id
        this.csr = commaJoinedValues[0].event_name_en
        this.csr_detail = commaJoinedValues[0].content_detail_en
        this.csr_date = commaJoinedValues[0].post_date
        const v = await this.imageService.findByIdHeader(this.csr_id).toPromise();
        this.csr_img =  this.node_static_url + v['img_header']
      }
      if (index == 2) {
        this.events_id = commaJoinedValues[0].event_id
        this.events = commaJoinedValues[0].event_name_en
        this.events_detail = commaJoinedValues[0].content_detail_en
        this.events_date = commaJoinedValues[0].post_date
        const v = await this.imageService.findByIdHeader(this.events_id).toPromise();
        this.events_img =  this.node_static_url + v['img_header']
      }
    }
   
  }
  editItem(id) {
    this.router.navigate(["post/edit/" + id]);
  }

}
