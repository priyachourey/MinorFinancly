import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
 constructor(private router : Router){}
 username = '';
 password = '';
 confirmpassword ='';

 matchpassword(){
   return this.confirmpassword == this.username && this.password.length > 6
 }

 register(){

 }
}
