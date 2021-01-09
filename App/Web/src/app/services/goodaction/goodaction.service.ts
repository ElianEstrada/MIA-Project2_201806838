import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodactionService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000/goodaction";
  }

  add(name: string, description: string, reward: number, age: number){
    const data = { name, description, reward, age };
    return this.httpClient.post(this.url + "/add", data).toPromise();
  }

  addDetail(code: number, child: number){
    const data = { code, child }
    return this.httpClient.post(this.url + "/adddetail", data).toPromise();
  }

  count(code: number){
    return this.httpClient.get(this.url + `/canes/${code}`).toPromise();
  }

  show(){
    return this.httpClient.get(this.url).toPromise();
  }

  show2(code: number){
    return this.httpClient.get(this.url + `/show2/${code}`).toPromise();
  }

  modify(code: number, name: string, description: string, reward: number, age: number){
    const data = { name, description, reward, age };
    return this.httpClient.put(this.url + `/modify/${code}`, data).toPromise();
  }

  delete(code: number){
    return this.httpClient.delete(this.url + `/delete/${code}`).toPromise();
  }

}
