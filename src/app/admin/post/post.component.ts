import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContentService } from 'src/app/services/content.service';
import { UserModel } from '../../models/user';
import { contentModel } from '../../models/content';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public readonly USERLOGIN: UserModel = this.authenticationService.currentUserValue;
  public content: contentModel;

  name: string = '';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private contentService: ContentService
  ) {

  }

  async ngOnInit() {
    this.content = await this.contentService.find().toPromise();
  }


  editItem(id) {
    this.router.navigate(["post/edit/" + id]);
  }

  async deleteItem(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
        await this.contentService.delete(id).toPromise();
        this.content = await this.contentService.find().toPromise();
      }
    });
  }

  async searchDB(e) {

    if (e.target.value == "") {
      this.content = await this.contentService.find().toPromise();
    }
    else {
      this.content = await this.contentService.getContentBydate(e.target.value).toPromise();
    }
  }
  async onSearch(keyword) {

    if (keyword != "") {
      this.content = await this.contentService.getContentByKeyword(keyword).toPromise();
    } else {
      this.content = await this.contentService.find().toPromise();
    }

  }

  home() {
    window.location.href = '/home';

  }

}
