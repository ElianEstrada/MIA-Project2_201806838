import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  categorys = []
  type: string;

  codeProduct: number;
  name: string;
  price: number;
  age: number;
  category: number;


  constructor(public productService: ProductService) {
    this.registry();
  }

  ngOnInit(): void {
    this.showProducts();
    this.getCategorys();
  }

  async showProducts(){
    let result = await this.productService.showAll();

    this.products = JSON.parse(JSON.stringify(result));
    console.log(this.products);
    
  }

  async getCategorys(){
    let result = await this.productService.getCategory();
    this.categorys = JSON.parse(JSON.stringify(result));
  }

  async delete(code){
    console.log(code);
    
    let result = await this.productService.delete(code);
    console.log(result);
    
    this.showProducts();
    
  }

  modify(product){
    console.log(product);
    this.codeProduct = product.code;
    this.name = product.name;
    this.price = product.price;
    this.age = product.age;
    this.category = product.category
    this.type = "Modify"
  }

  registry(){
    this.type = "Registry"
    this.category = 0;
    this.price = null;
    this.age = null;
    this.name = '';
  }

  async execute(){
    if (this.type == "Modify"){
      let result = await this.productService.modify(this.codeProduct, this.name, this.price, this.age, this.category);
      console.log(result);
      
      this.showProducts();
    }else{
      let result = await this.productService.add(this.name, this.price, this.age, this.category);
      console.log(result);

      this.showProducts();
      
    }
    
  }

}
