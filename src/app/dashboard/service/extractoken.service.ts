import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtractokenService {

  constructor() { }

  GetUsername() {
    const token = window.localStorage.getItem('token');
    if (token) {
      try {

        const decode = atob(token.split('.')[1]);
        const userinfo = JSON.parse(decode);
        const Username = userinfo.data;
        console.log(Username);
        return Username;
      }
      catch {
        console.log("error parsing token");
      }
    }
    else {
      console.log("Token is empty")
    }
    return null;
  }
}
