import { Component, OnInit } from '@angular/core';
import { LetterService } from 'src/app/services/letter/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  letters = []
  budget: number;

  name: string;
  body: string;
  date: string;
  cod_child: number;

  constructor(public letterService: LetterService) { }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem("user"));
    this.cod_child = data.code;
    this.budget = data.budget;
    this.getLetter();
    this.registry();
  }

  registry(){
    this.name = ''
    this.body = ''
    this.date = ''
  }

  async getLetter(){
    let result = await this.letterService.show(this.cod_child);
    console.log(result);
    this.letters = JSON.parse(JSON.stringify(result));
  }

}
