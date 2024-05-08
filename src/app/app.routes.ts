import { Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {NewPostComponent} from "./posts/new-post/new-post.component";
import {EditPostComponent} from "./posts/edit-post/edit-post.component";

export const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent, children: [
      {path: 'new-post', component: NewPostComponent},
      {path: 'edit-post/:postId', component: EditPostComponent}
    ]},
];
