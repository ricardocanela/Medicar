import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component"
import { LoginComponent } from "./views/login/login.component"
import { SigninComponent } from "./views/signin/signin.component"
import { NewAppointmentComponent } from "./views/new-appointment/new-appointment.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "new-appointment",
    component: NewAppointmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
