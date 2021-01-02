import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() movil: boolean;

  email: string;
  nickName: string;
  password: string;
  authentify: boolean;

  constructor(public loginService: LoginService, private navegation: Router) { 
      this.password= '';
      this.email='';
      this.nickName='';
      this.authentify = true;
  }

  ngOnInit(): void {
    this.loginService
  }

  async login(){
    console.log(this.nickName);
    console.log(this.email);
    console.log(this.password);

    let result = await this.loginService.login(this.nickName, this.email, this.password)
    console.log(result);
    
    console.log(result.hasOwnProperty("Auth"));
    let auth = result.hasOwnProperty("Auth");
    let object = JSON.parse(JSON.stringify(result));

    if (auth){
      console.log(object.child);
      localStorage.setItem("user", JSON.stringify(object.child))
      this.navegation.navigate(['home'])
    }else{
      this.authentify = false
    }

  }

}
