import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "http://localhost:3000"
  }

  showAll() {
    return this.httpClient.get(this.url + "/users").toPromise();
  }

  delete(code: number, flag: boolean) {
    if (flag){
    return this.httpClient.delete(this.url + `/childs/delete/${code}`).toPromise();
    }else{
    return this.httpClient.delete(this.url + `/users/delete/${code}`).toPromise();
    }
  }

  modify(code: number, name:string, email:string, password: string, telephone: number,
    userType: number, municipality: number, department: number, longitude: number, latitude: number, description: string){
    const data = {name, email, password, telephone, userType, municipality, department, longitude, latitude, description};
    return this.httpClient.put(this.url + `/users/modify/${code}`, data).toPromise();
  }

  modifyChild(code: number, name: string, nickName: string, password: string, budget: number, birthDate: string, gender: number){
    const data = {name, nickName, password, budget, birthDate, gender};
    return this.httpClient.put(this.url + `/childs/modify/${code}`, data).toPromise();
  }

  add(name:string, email:string, password: string, telephone: number,
    userType: number, municipality: number, department: number, longitude: number, latitude: number, description: string){
    const data = { name, email, password, telephone, userType, municipality, department, longitude, latitude, description };
    return this.httpClient.post(this.url + "/users/registry", data).toPromise();
  }

  addChild(name: string, nickName: string, password: string, budget: number, birthDate: string, gender: number, father: number){
    const data = {name, nickName, password, birthDate, budget, gender, father};
    return this.httpClient.post(this.url + `/childs/registry`, data).toPromise();
  }

  getUserType(){
    return this.httpClient.get(this.url + "/users/userType").toPromise();
  }

  getGender(){
    return this.httpClient.get(this.url + "/users/genders").toPromise();
  }

  getParents(){
    return this.httpClient.get(this.url + "/users/parents").toPromise();
  }
}
