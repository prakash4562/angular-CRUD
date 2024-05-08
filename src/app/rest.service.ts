import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiURL = 'https://posts-1c8ef-default-rtdb.firebaseio.com/';

  refreshPostsDataEvent = new EventEmitter();
  constructor(private http: HttpClient) { }

  createPost(postData) {
    return this.http.post(this.apiURL + 'posts.json', postData)
  }

  fetchPosts() {
    return this.http.get(this.apiURL + 'posts.json')
  }

  fetchPostDetail(id) {
    return this.http.get(this.apiURL + `posts/${id}.json`)
  }

  updatePost(id, postData) {
    return this.http.patch(this.apiURL + `posts/${id}.json`, postData)
  }

  deletePost(id) {
    return this.http.delete(this.apiURL + `posts/${id}.json`)
  }
}
