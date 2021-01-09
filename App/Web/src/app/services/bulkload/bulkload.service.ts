import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BulkloadService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://34.72.26.108:3000/load"
  }

  load(file: File){

    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    return this.httpClient.post(this.url, formData).toPromise();
  }

}
