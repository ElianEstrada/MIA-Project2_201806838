import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://34.72.26.108:3000/reports"
  }


  products(){
    return this.httpClient.get(this.url + "/products").toPromise();
  }

  department(){
    return this.httpClient.get(this.url + "/department").toPromise();
  }

  municipality(){
    return this.httpClient.get(this.url + "/municipality").toPromise();
  }

  goodAction(){
    return this.httpClient.get(this.url + "/goodaction").toPromise();
  }

  category(){
    return this.httpClient.get(this.url + "/category").toPromise();
  }

  letter(){
    return this.httpClient.get(this.url + "/letter").toPromise();
  }
  

}
