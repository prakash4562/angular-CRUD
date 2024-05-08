import { Component, Input } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RestService} from "../../rest.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  constructor(private restService: RestService) {
  }
  @Input() post: any;

  deletePost(id) {
    if (confirm('Are you really want to delete?')) {
      this.restService.deletePost(id).subscribe({
        next: (res) => {
          console.log(res);
          this.restService.refreshPostsDataEvent.emit();
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }
}
