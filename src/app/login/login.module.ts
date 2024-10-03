import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
