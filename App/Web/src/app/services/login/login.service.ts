import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://34.72.26.108:3000/login"
  }

  login(nickName, email, password) {

    if (nickName === '') {
      const data = { email, password }
      return this.httpClient.post(this.url, data).toPromise();

    } else if (email === '') {
      const data = { nickName, password }
      return this.httpClient.post(this.url, data).toPromise();
    }

  }

}
