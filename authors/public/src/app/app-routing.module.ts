<<<<<<< HEAD
import { NgModule, Component } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'home', component: HomeComponent,
  },
  {
=======
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: '',
    pathMatch: 'full',
<<<<<<< HEAD
   redirectTo: '/home'
=======
    component: HomeComponent
>>>>>>> 7d20c188a98e97ed59d72309be23879aa5916927
  },
  // {
  //   path: "**",
  //   component: "/PageNotFoundComponent"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
