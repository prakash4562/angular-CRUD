import {Component, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostFormComponent} from "../post-form/post-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [
    PostFormComponent,
    NgIf
  ],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit{
  postDetail: any = null;
  postId: any;

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.getPostDetail(this.postId);
  }

  getPostDetail(id) {
    this.restService.fetchPostDetail(id).subscribe({
      next: (res) => {
        this.postDetail = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  editPost($event: any) {
    this.restService.updatePost(this.postId, $event).subscribe({
      next: (res) => {
        console.log(res)
        this.restService.refreshPostsDataEvent.emit();
        this.router.navigate(['/posts'])
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
