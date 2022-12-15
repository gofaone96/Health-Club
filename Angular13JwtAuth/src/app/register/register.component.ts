import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/_services/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private userService: UserService, private router:Router) { }

  ngOsubmit(): void {
  }
  onSubmit(): void {

    let userDetails ={
      username: this.form.username,
      email: this.form.email,
      password: this.form.password 
    }
    console.log(userDetails)

    // const { username, email, password } = this.form;

    this.userService.AddUser(userDetails).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/home'])
      }
    });

  }
}

