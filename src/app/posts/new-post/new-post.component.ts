import { Component } from '@angular/core';
import {PostFormComponent} from "../post-form/post-form.component";
import {RestService} from "../../rest.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [
    PostFormComponent
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {

  constructor(private restService: RestService, private router: Router) {
  }
  createNewPost($event: any) {
    this.restService.createPost($event).subscribe({
      next: (res) => {
        console.log(res);
        this.restService.refreshPostsDataEvent.emit();
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
