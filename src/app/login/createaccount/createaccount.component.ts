import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegisterInterface } from '../models/register';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  constructor(private router: Router, private Loginservice: LoginService) { }
  username = '';
  email = ''
  password = '';
  confirmpassword = '';

  matchpassword() {
    return this.password == this.confirmpassword && this.password.length > 6
  }

  alertVisible: boolean = false;


  showAlert() {
    this.alertVisible = true;
  }

  closeAlert() {
    this.alertVisible = false;
  }

  redirect(){
    this.router.navigate(['auth'])
  }

  register() {
    let reqObj: RegisterInterface = {
      username: this.username,
      email : this.email,
      password: this.password
    }

    this.Loginservice.CreateAccount(reqObj).subscribe(value => {
      this.showAlert();
    })
  }
}
