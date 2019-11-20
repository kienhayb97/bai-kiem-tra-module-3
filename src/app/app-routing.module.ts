import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Awesome/home/home.component';
import {ViewComponent} from './Awesome/view/view.component';
import {CreateComponent} from './Awesome/create/create.component';
import {DeleteComponent} from './Awesome/delete/delete.component';
import {EditComponent} from './Awesome/edit/edit.component';


const routes: Routes = [
  {
    path: 'homeAwesome',
    component: HomeComponent
  },
  {
    path: 'homeAwesome/viewAwesome/:id',
    component: ViewComponent
  },

  {
    path: 'homeAwesome/createAwesome',
    component: CreateComponent
  },
  {
    path: 'homeAwesome/deleteBlog/:id',
    component: DeleteComponent
  },
  {
    path: 'homeAwesome/editBlog/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
