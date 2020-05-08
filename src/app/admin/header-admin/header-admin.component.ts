import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RestService } from './../../services/rest.service';
import Swal from 'sweetalert2'
import Swiper from 'swiper';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  public name: any;
  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }
  async  ngOnInit() {
    let data = await this.authenticationService.getCoockie();
    this.name = JSON.parse(data);
  }

  async onClickSignOut() {
    // await this.rest.deleteCoockie()
    await this.authenticationService.logout()
    this.router.navigate(["/login"])
  }


}
