import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface} from './models/login.interface';
import { RegisterInterface} from './models/register'
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  CreateAccount(reqestobj : RegisterInterface) : Observable<any> {
    return this.httpClient.post('http://localhost:8000/auth/register', reqestobj, {responseType: 'text'})
  } 

  login(reqestobj:LoginInterface):Observable<any>{
    return this.httpClient.post('http://localhost:8000/auth/login',reqestobj,{responseType: 'text'})
  }

}
