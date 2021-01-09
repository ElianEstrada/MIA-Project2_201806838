import { Component, OnInit } from '@angular/core';
import { PostService } from  'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = []

  body: string;
  date: string;
  cod_child: number;
  cod_post: number;

  constructor( public postService: PostService ) { }

  ngOnInit(): void {
    this.cod_child = JSON.parse(localStorage.getItem("user")).code;
    this.getPosts();
  }

  async getPosts(){
    let result = await this.postService.getPost();
    console.log(result);
    this.posts = JSON.parse(JSON.stringify(result));
  }

}
