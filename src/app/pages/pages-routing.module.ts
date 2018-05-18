import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path:'',
    component:PagesComponent ,
    children:[
      {path:'',redirectTo:'dashboard'},
      {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
