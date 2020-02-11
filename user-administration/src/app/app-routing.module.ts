import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: '', component: ViewComponent },
  {path: 'create', component: CreateComponent},
  {path: 'view', component: ViewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
