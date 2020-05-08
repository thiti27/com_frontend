import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/services/rest.service';
import { Location } from '@angular/common'
import Swal from 'sweetalert2'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContentService } from 'src/app/services/content.service';
import { UserModel } from '../../models/user';
import { contentModel } from '../../models/content';
import { imagesModel } from '../../models/images';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public readonly USERLOGIN: UserModel = this.authenticationService.currentUserValue;
  public content: contentModel;
  form: any;
  node_static_url = `${environment.backendUrl}`;

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  file: string = '';
  borderColor: string;
  iconColor: string;
  filename = 'Choose file';

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
  uploadedFiles: Array<File>;
  minDate = '';
  submitted = false;
  name: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private contentService: ContentService,
    private imagesService: ImagesService,
    private http: HttpClient,
    private location: Location,

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
        post_by: new FormControl("", Validators.required),
      }
    )
  }

  async ngOnInit() {
    this.imageSrc = "./../../assets/templates/home/img-header.png"
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
    await this.imagesService.delete(filename).toPromise();
   

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
        const a = await this.imagesService.addImg(formData).toPromise()
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
    await this.imagesService.delete(image.name).toPromise();

  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
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
    this.comNews = this.form.value.comNews
    this.csr = this.form.value.csr
    this.event = this.form.value.event
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
    this.comNews = this.form.value.comNews
    this.csr = this.form.value.csr
    this.event = this.form.value.event
    this.imgHeader = this.filename
    this.imgAll = this.imgName
  }

  async save() {

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
    let data = {
      "event_name_th": this.form.value.titleTh,
      'event_name_en': this.form.value.titleEn,
      'content_detail_th': this.form.value.detailTh,
      'content_detail_en': this.form.value.detailEn,
      'event_datetime': this.form.value.dateActivity,
      'post_by': "admin",
      'published_date': this.form.value.datePublish,
      'csr': this.csr,
      'com_news': this.comNews,
      'events': this.event,
 
    }

    let a = await this.contentService.addContent(data).toPromise()
    alert(this.form.value.titleTh)
    let id = a.message
    let imgHead = new FormData();
    imgHead.append("event_id", id);
    imgHead.append("image_storage", this.filename);
    imgHead.append("image_name", this.imgname);
    imgHead.append("image_size", this.size);
    imgHead.append("image_type", this.type);
    imgHead.append("image_header", '1');
    await this.imagesService.addImgdb(imgHead).toPromise()

    for (var i = 0; i < this.images.length; i++) {
      let imgHead = new FormData();
      imgHead.append("event_id", id);
      imgHead.append("image_storage", this.images[i].name);
      imgHead.append("image_name", this.images[i].imgname);
      imgHead.append("image_size", this.images[i].size);
      imgHead.append("image_type", this.images[i].type);
      await this.imagesService.addImgdb(imgHead).toPromise()
    }
    Swal.fire({
      title: 'Create successfully',
      text: 'Click close button to back to the Post page',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
    }).then(result => {
      this.location.back();
    });


  }
  setMinDate(e) {
    this.minDate = e.target.value
  }


}


