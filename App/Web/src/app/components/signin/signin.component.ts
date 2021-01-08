import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  department: number;
  municipality: number;
  name: string;
  email: string;
  password: string;
  description: string;
  phone: number;
  longitude: number;
  latitude: number;
  error: boolean;

  departments = [];
  municipalitys = [];

  constructor(public signinService: SigninService,
    private navegation: Router) { 
    this.name = ''
    this.email = '';
    this.password = '';
    this.description = '';
    this.department = 0;
    this.municipality = 0;
    this.latitude = null;
    this.longitude = null;
  }

  async ngOnInit(): Promise<void> {
    await this.getDepartment();
    console.log(this.departments);
  }


  async getDepartment(){
    let result = await this.signinService.getDepartment();

    this.departments = JSON.parse(JSON.stringify(result))
    console.log(this.departments);
  }

  async getMunicipality(){
    let result = await this.signinService.getMunicipality(this.department);
    this.municipalitys = JSON.parse(JSON.stringify(result));
    console.log(this.municipalitys);
  }

  async signin(){
    let result = await this.signinService.addFather(this.name, this.email, this.password, this.phone, 2, this.municipality, this.department, 
      this.longitude, this.latitude, this.description);
    if (result.hasOwnProperty("Info")){
      this.navegation.navigate(['login']);
    }else{
      this.error = true;
    }
  }

}
