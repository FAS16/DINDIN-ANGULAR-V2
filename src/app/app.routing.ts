import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, // When URL is empty go to this
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
