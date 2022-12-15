import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/_services/auth.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from '../service/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  decoded:any;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {


    let logingDetails = {
      email: this.form.email,
      password: this.form.password
    }

    console.log(logingDetails)

    if(logingDetails.email != '' && logingDetails.password != '')
    {
      this.userService.UserLogin(logingDetails).subscribe(res => {
        this.decoded = jwt_decode(res.token); 

        this.router.navigate(['/user']);

        sessionStorage.setItem('loggedInToken', res.token);
        sessionStorage.setItem('loggedEmail', this.decoded.email);

      });
    }


    // const { username, password } = this.form;

    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this['reloadPage']();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });


  }
  reloadPage(): void {
    window.location.reload();
  }
}
