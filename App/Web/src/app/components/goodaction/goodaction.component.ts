import { Component, OnInit } from '@angular/core';
import { GoodactionService } from 'src/app/services/goodaction/goodaction.service';

@Component({
  selector: 'app-goodaction',
  templateUrl: './goodaction.component.html',
  styleUrls: ['./goodaction.component.css']
})
export class GoodactionComponent implements OnInit {

  goodActions = [];
  type: string;

  code: number;
  name: string;
  description: string;
  reward: number;
  age: number;

  constructor(public goodActionService: GoodactionService) { 
    
  }

  ngOnInit(): void {
    this.registry();
    this.getGoodActions();
  }

  registry(){
    this.type = "Registry";
    this.name = '';
    this.description = '';
    this.reward = null;
    this.age = null;
  }

  async getGoodActions(){
    let result = await this.goodActionService.show();
    console.log(result);
    
    this.goodActions = JSON.parse(JSON.stringify(result));
  }

  modify(item){
    this.code = item.code;
    this.name = item.name;
    this.description = item.description;
    this.reward = item.reward;
    this.age = item.age;
    this.type = "Modify"
  }

  async execute(){
    if (this.type === "Modify"){
      console.log(this.code);
      
      let result = await this.goodActionService.modify(this.code, this.name, this.description, this.reward, this.age);
      console.log(result);
      
    }else{
      let result = await this.goodActionService.add(this.name, this.description, this.reward, this.age);
      console.log(result);
    }

    this.getGoodActions();
  }

  async delete(code){
    let result = await this.goodActionService.delete(code);
    console.log(result);
    
    this.getGoodActions();
  }

}
