import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  url: string

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000/letters"
  }


  show(code: number){
    return this.httpClient.get(this.url + `/${code}`).toPromise();
  }

  addLetter(name: string, body: string, date: string, cod_child: number){
    const data = { name, body, date, cod_child }
    return this.httpClient.post(this.url + "/addLetter", data).toPromise();
  }


}
