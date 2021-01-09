import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  products = []
  departments = []
  municipalitys = []
  goodactions = []
  categorys = []
  letters = []

  constructor(public reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getDepartment();
    this.getMunicipality();
    this.getGoodAction();
    this.getCategory();
    this.getLetters();
  }

  async getProducts(){
    let result = await this.reportsService.products();
    console.log(result);
    this.products = JSON.parse(JSON.stringify(result));
  }

  async getDepartment(){
    let result = await this.reportsService.department();
    console.log(result);
    this.departments = JSON.parse(JSON.stringify(result));
  }

  async getMunicipality(){
    let result = await this.reportsService.municipality();
    console.log(result);
    this.municipalitys = JSON.parse(JSON.stringify(result));
  }

  async getGoodAction(){
    let result = await this.reportsService.goodAction();
    console.log(result);
    this.goodactions = JSON.parse(JSON.stringify(result));
  }

  async getCategory(){
    let result = await this.reportsService.category();
    console.log(result);
    this.categorys = JSON.parse(JSON.stringify(result));
  }

  async getLetters(){
    let result = await this.reportsService.letter();
    console.log(result);
    this.letters = JSON.parse(JSON.stringify(result));
  }

}
