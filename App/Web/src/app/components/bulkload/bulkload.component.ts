import { Component, OnInit } from '@angular/core';
import { BulkloadService } from 'src/app/services/bulkload/bulkload.service';

@Component({
  selector: 'app-bulkload',
  templateUrl: './bulkload.component.html',
  styleUrls: ['./bulkload.component.css']
})
export class BulkloadComponent implements OnInit {

  file: File =null;
  fileName: string;

  constructor(public bulkloadService: BulkloadService) { 
    this.fileName = ''
  }

  ngOnInit(): void {
  }

  enable(){

    if (this.file !== undefined){
      this.fileName = this.file.name;
    }else{
      this.fileName = ''
    }

    console.log(this.file);
    
  }

  upload(fileInput: Event){
    this.file = (<HTMLInputElement>fileInput.target).files[0];
    console.log(this.file);
  }

  async loadFile(){
    let result = await this.bulkloadService.load(this.file);
    console.log(result);
  }

}
