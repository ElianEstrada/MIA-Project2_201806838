import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000/post"
  }

  getPost(){
    return this.httpClient.get(this.url).toPromise();
  }

  getCommentary(code: number){
    return this.httpClient.get(this.url + `/commentary/${code}`).toPromise();
  }

  addComment(body: string, date: string, cod_post: number, cod_child: number){
    const data = { body, date, cod_post, cod_child }
    return this.httpClient.post(this.url + "/addCommentary", data).toPromise();
  }

}
