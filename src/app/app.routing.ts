import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContactComponent} from './contact/contact.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {ResultGuard} from './guards/result-guard.service';
import {RestaurantProfileComponent} from './restaurant/restaurant-profile/restaurant-profile.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, // When URL is empty go to this
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'results', component: RestaurantComponent, canActivate: [ResultGuard]},
    {path: 'restaurant/:id', component: RestaurantProfileComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService]}, // Fyr user id på
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
