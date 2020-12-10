import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost'
import blogData from '../blogData.json'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  blogPosts: Array<BlogPost> = blogData;

  ngOnInit(): void {
  }

}
