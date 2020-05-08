import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContentService} from 'src/app/services/content.service';
import { Location, DOCUMENT } from '@angular/common'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  searchText;
  content: string;
  mDataArray: any[] = [];
  baseUrl = environment.baseUrl;
  node_static_url = environment.backendUrl;
  type: any;
  mItem: any[] = [];
  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private contentService : ContentService,
    private location: Location,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  async ngOnInit() {
    // this.mDataArray = await this.rest.getContent().toPromise();
    this.route.queryParams.subscribe((params) => {
      this.type = params.type

    })
    if (this.type == "com_news") {
      this.content = "Company News"
    }
    if (this.type == "csr") {
      this.content = "Company CSR"
    }
    if (this.type == "events") {
      this.content = "Company Activity"
    }
    this.mDataArray = await this.contentService.getContentByType(this.type).toPromise();

  }


  async searchDB(e) {

    if (e.target.value == "") {
      this.mDataArray = await this.contentService.getContentByType(this.type).toPromise();
    }
    else {
      this.mDataArray = await this.contentService.getContentBydateType(e.target.value,this.type ).toPromise();
    }
  }
  async onSearch(keyword) {

    if (keyword != "") {
      this.mDataArray = await this.contentService.getContentByKeywordChoose(keyword,this.type ).toPromise();
    } else {
      this.mDataArray = await this.contentService.getContentByType(this.type).toPromise();
    }

  }



  async editItem(id, type) {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("type", type);
    formData.append('active', '2')
    await this.contentService.updateType(formData).toPromise()

    Swal.fire({
      title: 'Update successfully',
      text: 'Click close button to back to the Post page',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
    }).then(result => {
      this.location.back();
    });

  }
}
