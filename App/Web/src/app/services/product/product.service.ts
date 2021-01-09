import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000/products"
  }

  showAll() {
    return this.httpClient.get(this.url).toPromise();
  }

  delete(code: number) {
    return this.httpClient.delete(this.url + `/delete/${code}`).toPromise();
  }

  modify(code: number, name:string, price: number, age:number, category: number){
    const data = {name, price, age, category};
    return this.httpClient.put(this.url + `/modify/${code}`, data).toPromise();
  }

  add(name:string, price: number, age:number, category: number){
    const data = { name, price, age, category };
    return this.httpClient.post(this.url + "/add", data).toPromise();
  }

  getCategory(){
    return this.httpClient.get(this.url + "/categorys").toPromise();
  }

}
