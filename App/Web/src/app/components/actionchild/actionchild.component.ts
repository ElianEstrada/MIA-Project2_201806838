import { Component, OnInit } from '@angular/core';
import { GoodactionService } from 'src/app/services/goodaction/goodaction.service';

@Component({
  selector: 'app-actionchild',
  templateUrl: './actionchild.component.html',
  styleUrls: ['./actionchild.component.css']
})
export class ActionchildComponent implements OnInit {

  actions = []

  child: number;
  budget: number;
  noCanes: number;

  constructor(public goodactionService: GoodactionService) { }

  ngOnInit(): void {
    this.child = JSON.parse(localStorage.getItem("user")).code
    this.budget = JSON.parse(localStorage.getItem("user")).budget
    console.log(this.budget);
    
    this.getGoodActions();
    this.canes();
  }

  async canes(){
    let result = await this.goodactionService.count(this.child);
    console.log(result);
    let data = JSON.parse(JSON.stringify(result)).canes
    
    if (data === null){
      this.noCanes = 0
    }else{
      this.noCanes = data
    }
    
  }

  async getGoodActions(){
    console.log(this.child);
    
    let result = await this.goodactionService.show2(this.child);
    console.log(result);
    
    this.actions = JSON.parse(JSON.stringify(result));
  }

  async add(item){
    let result = await this.goodactionService.addDetail(item.code, this.child);
    this.noCanes += item.reward;
    console.log(result);
    this.getGoodActions();
  }

}
