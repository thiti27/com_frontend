import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RestService } from '../../services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') public loginForm: NgForm;

  public returnUrl: string;
  public loginValid: boolean;
  public login: any = {
    username: '',
    password: ''
  };

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.login = {};
    this.loginValid = true;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/post';
  }

  loginSubmit() {
    this.loginValid = this.loginForm.form.valid;

    if (!this.loginValid) {
      Swal.fire({
        title: 'Warning!',
        text: 'Your username and password is not completed. Please re-check again.',
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false
      });
      return;
    }

    this.authenticationService.login(this.login.username, this.login.password).subscribe(
      res => {
        if (!res) {
          Swal.fire({
            title: 'Warning!',
            text: 'Your username and password is not completed. Please re-check again.',
            icon: 'warning',
            allowOutsideClick: false,
            allowEscapeKey: false
          });
        } else {
          this.router.navigate([this.returnUrl]);
        }
      }, this.errorHandler
    );
  }

  errorHandler = (err): void => {
    Swal.fire({
      title: 'Error!',
      text: 'Please check your username and password !',
      icon: 'error',
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.value) {
        location.reload();
      }
    });
  }
}
