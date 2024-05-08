import {Component, OnInit} from '@angular/core';
import {PostCardComponent} from "./post-card/post-card.component";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {RestService} from "../rest.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostCardComponent,
    MatButton,
    RouterOutlet,
    RouterLink,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  constructor(private restService: RestService) {
  }
  posts: any = [];

  ngOnInit() {
    this.getPosts();
    this.restService.refreshPostsDataEvent.subscribe(res => {
      this.getPosts();
    })
  }

  getPosts() {
    this.restService.fetchPosts().subscribe({
      next: (res: any) => {
        const temp: any = [];
        for (const key in res) {
          temp.push({
            id: key,
            ...res[key]
          })
        }
        this.posts = temp;
        console.log(this.posts);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
