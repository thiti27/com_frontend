import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common'
import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContentService } from 'src/app/services/content.service';
import { UserModel } from '../../models/user';
import { contentModel } from '../../models/content';
import { imagesModel } from '../../models/images';
import { ImagesService } from 'src/app/services/images.service';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  public readonly USERLOGIN: UserModel = this.authenticationService.currentUserValue;
  public content: contentModel;
  form: any;
 

  node_static_url = `${environment.backendUrl}`;
  public imageSrc: any = null;

  mIsSubmitted = false;

  filename = 'Choose file';

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;

  file: string = '';
  borderColor: string;
  iconColor: string;


  images: any = [];
  allfiles: any = [];
  headerImg;
  imagesName = [];
  imgName = [];
  AddNameImg = [];
  imgAll = [];
  allData: any[];
  imgHeader: string;

  imgname: string = '';
  size: string = '';
  type: string = '';

  titleEn: string = '';
  detailEn: string = '';
  titleTh: string = '';
  detailTh: string = '';
  dateActivity: string = '';
  datePublish: string = '';
  comNews: string = '';
  csr: string = '';
  event: string = '';
  event_id: string = '';
  id: 0;
  minDate = '';

  uploadedFiles: Array<File>;
  name: string = '';
  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private contentService: ContentService,
    private imagesService: ImagesService,
    private router: Router,
    private http: HttpClient,
    private location: Location,
    public _d: DomSanitizer
  ) {
    this.form = new FormGroup(
      {
        id: new FormControl("", Validators.required),
        titleTh: new FormControl("", Validators.required),
        titleEn: new FormControl("", Validators.required),
        detailTh: new FormControl("", Validators.required),
        detailEn: new FormControl("", Validators.required),
        dateActivity: new FormControl("", Validators.required),
        datePublish: new FormControl("", Validators.required),
        comNews: new FormControl("", Validators.required),
        csr: new FormControl("", Validators.required),
        event: new FormControl("", Validators.required),
        post_by : new FormControl("", Validators.required),
      }
    )

  }
  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.id = params["id"]

      this.content = await this.contentService.findById(this.id).toPromise();
      this.event_id = this.content.event_id.toString()
      this.form.patchValue({
        titleTh: this.content.event_name_th,
        titleEn: this.content.event_name_en,
        detailTh: this.content.content_detail_th,
        detailEn: this.content.content_detail_en,
        dateActivity: this.content.event_datetime,
        datePublish: this.content.published_date,
        comNews: this.content.com_news,
        csr: this.content.csr,
        event: this.content.events,
      });


      const v = await this.imagesService.findByIdHeader(this.id).toPromise();
      const obj = JSON.parse(JSON.stringify(v));
      this.minDate = this.content.event_datetime
      this.filename = obj.img_header
      this.imageSrc = this.node_static_url+ obj.img_header
      const allImg = await this.imagesService.findByIdAll(this.id).toPromise();
      const obj1 = JSON.parse(JSON.stringify(allImg));
      this.setfileuploads(obj1.img_all)

    })
  }
  async setfileuploads(event) {
    for (let i = 0; i < event.length; i++) {
      const image = {
        name: '',
        type: '',
        size: '',
        imgname: '',
        url: '',
      };
      image.name = event[i]
      image.url = this.node_static_url + event[i]
      this.images.push(image);
      this.allfiles.push(image);
    }

  }


  async fileHeader(event) {
    const file = event.target.files[0];
    if (file) {
      const image = {
        name: '',
        type: '',
        size: '',
        imgname: '',
        url: '',
      };

      //Upload IMG Baqckend
      const formData = new FormData();
      formData.append('image', file);
      //Insert File
      const a = await this.imagesService.addImg(formData).toPromise()
      this.filename = a.message
      this.imgname = a.imgname
      this.size = a.size
      this.type = a.type

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.imageSrc = event.target.result;
      }
    }
  }

  async deleteImg(filename) {
    this.imageSrc = "./../../assets/templates/home/img-header.png"
    this.filename = ""
    await  this.imagesService.delete(filename).toPromise();
  }

  async fileuploads(event) {

    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = {
          name: '',
          type: '',
          size: '',
          imgname: '',
          url: '',
        };
        this.allfiles.push(files[i]);

        //Upload IMG Baqckend
        const formData = new FormData();
        formData.append('image', files[i]);
        //Insert File
        const a =  await this.imagesService.addImg(formData).toPromise()
        // Show IMG
        image.name = a.message;
        image.imgname = a.imgname;
        image.type = files[i].type;
        image.size = files[i].size;
        const reader = new FileReader();
        reader.onload = (filedata) => {
          image.url = reader.result + '';
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
    }
    event.srcElement.value = null;
  }

  async deleteImage(image: any) {
    const index = this.images.indexOf(image);
    this.images.splice(index, 1);
    this.allfiles.splice(index, 1);
    await  this.imagesService.delete(image.name).toPromise();
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  async save() {

    this.titleEn = this.form.value.titleEn
    this.detailEn = this.form.value.detailEn
    this.titleTh = this.form.value.titleTh
    this.detailTh = this.form.value.detailTh
    this.dateActivity = this.form.value.dateActivity
    this.datePublish = this.form.value.datePublish

    if (this.form.value.csr == true) {
      this.csr = '1'
    }
    if (this.form.value.comNews == true) {
      this.comNews = '1'
    }
    if (this.form.value.event == true) {
      this.event = '1'
    }
    if (this.form.value.csr == false || this.form.value.csr == '') {
      this.csr = '0'
    }
    if (this.form.value.comNews == false || this.form.value.comNews == '') {
      this.comNews = '0'
    }
    if (this.form.value.event == false || this.form.value.event == '') {
      this.event = '0'
    }

    let formData = new FormData();
    formData.append("id", this.event_id);
    formData.append("event_name_th", this.titleTh);
    formData.append('event_name_en', this.titleEn)
    formData.append('content_detail_th', this.detailTh)
    formData.append('content_detail_en', this.detailEn)
    formData.append('event_datetime', this.dateActivity)
    formData.append('post_by', "admin")
    formData.append('published_date', this.datePublish)
    formData.append('csr', this.csr)
    formData.append('com_news', this.comNews)
    formData.append('events', this.event)
    let a = await this.contentService.updateContent(formData).toPromise()


    if (this.size == '') {

    }
    else {
      let imgHead = new FormData();
      imgHead.append("event_id", this.event_id);
      imgHead.append("image_storage", this.filename);
      imgHead.append("image_name", this.imgname);
      imgHead.append("image_size", this.size);
      imgHead.append("image_type", this.type);
      imgHead.append("image_header", '1');
      await this.imagesService.addImgdb(imgHead).toPromise()
    }

    for (var i = 0; i < this.images.length; i++) {
      if (this.images[i].size == '') {

      }
      else {
        let imgHead = new FormData();
        imgHead.append("event_id", this.event_id);
        imgHead.append("image_storage", this.images[i].name);
        imgHead.append("image_name", this.images[i].imgname);
        imgHead.append("image_size", this.images[i].size);
        imgHead.append("image_type", this.images[i].type);
        await this.imagesService.addImgdb(imgHead).toPromise()
      }

    }

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

  async previewEN() {
    this.imgName = []
    for (var i = 0; i < this.images.length; i++) {
      this.imgName.push(this.images[i].name)
    }
    this.titleEn = this.form.value.titleEn
    this.detailEn = this.form.value.detailEn
    this.dateActivity = this.form.value.dateActivity
    this.datePublish = this.form.value.datePublish
    if (this.form.value.csr == 1) {
      this.csr = 'true'
    }
    if (this.form.value.comNews == 1) {
      this.comNews = 'true'
    }
    if (this.form.value.event == 1) {
      this.event = 'true'
    }
    if (this.form.value.csr == '0') {
      this.csr = 'false'
    }
    if (this.form.value.comNews == '0') {
      this.comNews = 'false'
    }
    if (this.form.value.event == '0') {
      this.event = 'false'
    }

    this.imgHeader = this.filename
    this.imgAll = this.imgName
  }
  async previewTH() {
    this.imgName = []
    for (var i = 0; i < this.images.length; i++) {
      this.imgName.push(this.images[i].name)
    }

    this.titleTh = this.form.value.titleTh
    this.detailTh = this.form.value.detailTh
    this.dateActivity = this.form.value.dateActivity
    this.datePublish = this.form.value.datePublish

    this.imgHeader = this.filename
    this.imgAll = this.imgName
    if (this.form.value.csr == 1) {
      this.csr = 'true'
    }
    if (this.form.value.comNews == 1) {
      this.comNews = 'true'
    }
    if (this.form.value.event == 1) {
      this.event = 'true'
    }
    if (this.form.value.csr == '0') {
      this.csr = 'false'
    }
    if (this.form.value.comNews == '0') {
      this.comNews = 'false'
    }
    if (this.form.value.event == '0') {
      this.event = 'false'
    }
  }

  setMinDate(e) {
    this.minDate = e.target.value
  }



}