import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:'login',loadChildren:'./login/login.module#LoginModule'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class ApproutingModule { }
