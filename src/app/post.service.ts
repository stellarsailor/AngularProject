import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';

const perPage = 6

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]>{ 
    let url = `https://web433a5api.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`
    if(tag) url += `&tag=${tag}` //TODO check if the tag includes # or not
    if(category) url += `&category=${category}`

    return this.http.get<BlogPost[]>(url)
  }

  getPostbyId(id): Observable<BlogPost>{
    let url = `https://web433a5api.herokuapp.com/api/posts/${id}`

    return this.http.get<BlogPost>(url)
  }

  getCategories(): Observable<any>{
    let url = `https://web433a5api.herokuapp.com/api/categories`

    return this.http.get<any>(url)
  }

  getTags(): Observable<string[]>{
    let url = `https://web433a5api.herokuapp.com/api/tags`

    return this.http.get<string[]>(url)
  }

  getAllPosts():Observable<BlogPost[]>{
    let url = `https://web433a5api.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`

    return this.http.get<BlogPost[]>(url)
  }

  newPost(data: BlogPost): Observable<any>{
    let url = `https://web433a5api.herokuapp.com/api/posts`

    return this.http.post<any>(url, data);
  }

  updatePostById(id: string, data: BlogPost): Observable<any>{
    let url = `https://web433a5api.herokuapp.com/api/posts/${id}`

    return this.http.put<any>(url, data);
  }

  deletePostById(id: string): Observable<any>{
    let url = `https://web433a5api.herokuapp.com/api/posts/${id}`

    return this.http.delete<any>(url);
  }
}
