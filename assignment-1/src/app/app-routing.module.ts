import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
