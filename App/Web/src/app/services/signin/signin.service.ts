import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://34.72.26.108:3000"
  }

  getDepartment(){
      return this.httpClient.get(this.url + "/department").toPromise();
  }

  getMunicipality(department: number){
    const data = { department }
    return this.httpClient.post(this.url  + "/municipality", data).toPromise();
  }

  addFather(name, email, password, telephone, userType, municipality, department, longitude, latitude, description){
    const data = {
      name, 
      email,
      password, 
      telephone,
      userType, 
      municipality, 
      department,
      longitude,
      latitude, 
      description
    }

    return this.httpClient.post(this.url + "/users/registry", data).toPromise();
  }

}
