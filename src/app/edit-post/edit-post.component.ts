import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { Router, ActivatedRoute } from '@angular/router'
import { BlogPost } from '../BlogPost'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost
  tags: string

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.postService.getPostbyId(params.id).subscribe( data => {
        this.blogPost = data
        this.tags = this.blogPost.tags.toString()
      })
    })
  }

  formSubmit(f: NgForm){
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.postService.updatePostById(this.blogPost._id, this.blogPost).subscribe( data => {
      this.router.navigate(['admin'])
    })
  }

  deletePost(id){
    this.postService.deletePostById(id).subscribe( data => {
      this.router.navigate(['admin'])
    })
  }

}
