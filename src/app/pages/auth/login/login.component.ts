import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
  ) { }

  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };

  ngOnInit(): void { }

  login(ev: any) {
    // let loginValue = {
    //   Username: ev.username,
    //   Password: ev.password,
    // }
    // this.ciAuthService.login(loginValue).subscribe(
    //   (res: any) => {
    //     this.localStorage.set('access_token', res);
    //     this.router.navigate(['home']);
    //   },
    //   (err: any) => {
    //     console.log(err);

    //     this.router.navigate(['/home']);
    //   }
    // );
  }
  routeTo(e: any) {
    console.log(e);
  }
}
