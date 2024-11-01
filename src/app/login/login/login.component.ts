import { Component } from '@angular/core';
import { LoginInterface } from '../models/login.interface';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private Loginservices : LoginService, private router:Router){}

  username = '';
  password = '';

  login(){
    let reqObj: LoginInterface={
      username: this.username,
      password: this.password
    }
    this.Loginservices .login(reqObj).subscribe(value=>{
      window.localStorage.setItem("token",value)
      this.router.navigate(['dashboard']);
    })
   
  }
}
