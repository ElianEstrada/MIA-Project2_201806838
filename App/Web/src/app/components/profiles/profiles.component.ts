import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles/profiles.service';
import { SigninService } from 'src/app/services/signin/signin.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  users = []
  departments = []
  municipalitys = []
  usersType = []
  genders = []
  parents = []
  type: string;
  child: boolean;

  codeUser: number;
  name: string;
  email: string;
  password: string;
  telephone: number;
  department: number;
  municipality: number;
  description: string;
  longitude: number;
  latitude: number;
  userType: number;

  nickName: string;
  birthday: string;
  budget: number;
  gender: number;
  parent: number;

  constructor(private profilesService: ProfilesService,
    private signinService: SigninService) { 
      this.getDepartment();
      this.getUsersType();
      this.registry(false);
      this.getParents();
      this.getGender();
    }

  ngOnInit(): void {
    this.showUsers();
  }

  async showUsers(){
    let result = await this.profilesService.showAll();
    console.log(result);
    
    this.users = JSON.parse(JSON.stringify(result));
    console.log(this.users);
    
  }

  async getDepartment(){
    let result = await this.signinService.getDepartment();
    this.departments = JSON.parse(JSON.stringify(result));
  }

  async getUsersType(){
    let result = await this.profilesService.getUserType();
    console.log(result);
    
    this.usersType = JSON.parse(JSON.stringify(result));
  }

  async getGender(){
    let result = await this.profilesService.getGender();
    console.log(result);
    
    this.genders = JSON.parse(JSON.stringify(result));
  }

  async getParents(){
    let result = await this.profilesService.getParents();
    console.log(result);
    
    this.parents = JSON.parse(JSON.stringify(result));
  }

  async delete(item){
    
    if (item.userType === 0){
      let result = await this.profilesService.delete(item.code, true);
      console.log(result);
    }else{
      let result = await this.profilesService.delete(item.code, false);
      console.log(result);
    }

    this.showUsers();
    
  }

  async getMunicipality(){
    let result = await this.signinService.getMunicipality(this.department);
    this.municipalitys = JSON.parse(JSON.stringify(result));
  }

  async modify(user){
    this.type = "Modify"
    this.codeUser = user.code;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.telephone = user.telephone;
    this.department = user.codeDepartment;
    this.description = user.description;
    this.longitude = this.rounded(user.longitude);
    this.latitude = this.rounded(user.latitude);
    this.userType = user.userType;
    this.nickName = user.email;
    this.birthday = user.birthdate
    this.gender = user.codeGender;
    this.budget = user.budget;
    this.parent = user.codeParent;
    if(this.userType === 0){
      this.child = true;
    }
    await this.getMunicipality();
    this.municipality = user.codeMunicipality;
  }

  registry(flag: boolean){
    this.type = "Registry";
    this.name = '';
    this.email = '';
    this.password = '';
    this.telephone = null;
    this.department = 0;
    this.municipality = 0;
    this.description = '';
    this.longitude = null;
    this.latitude = null;
    this.userType = 0;
    this.nickName = '';
    this.birthday = '';
    this.gender = 0;
    this.budget = null;
    this.parent = 0;
    this.child = flag;
  }

  async execute(){
    if (this.type == "Modify"){
      
      if (this.userType === 0){
        let result = await this.profilesService.modifyChild(this.codeUser, this.name, this.nickName, this.password,
          this.budget, this.birthday, this.gender);
        console.log(result);
      }else{
        let result = await this.profilesService.modify(this.codeUser, this.name, this.email, this.password, this.telephone,
          this.userType, this.municipality, this.department, this.longitude, this.latitude, this.description);
        console.log(result);
      }
      
    }else{

      if (this.child){
        let result = await this.profilesService.addChild(this.name, this.nickName, this.password, this.budget, 
          this.birthday, this.gender, this.parent);
          console.log(result);
          
      }else{
        let result = await this.profilesService.add(this.name, this.email, this.password, this.telephone, this.userType, 
          this.municipality, this.department, this.longitude, this.latitude, this.description);
          console.log(result);
          
      }
    }

    this.showUsers();
    this.getParents();
    
  }

  rounded(num: number): number{
    let multipler = 100000000;

    if (num === null){
      return null;
    }else{
      return Math.round(num * multipler) / multipler;
    }
  }


}
