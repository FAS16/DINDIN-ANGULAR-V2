import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {RestaurantSearchComponent} from './home/restaurant-search/restaurant-search.component';
import {WhatComponent} from './home/restaurant-search/what/what.component';
import {WhereComponent} from './home/restaurant-search/where/where.component';
import {BudgetComponent} from './home/restaurant-search/budget/budget.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './restaurant/restaurant-list/restaurant-item/restaurant-item.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PageHeaderComponent} from './home/page-header/page-header.component';
import { ClickedDirective } from './shared/directives/clicked.directive';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDescriptionComponent } from './user/user-profile/user-description/user-description.component';
import { LikedRestaurantsComponent } from './user/user-profile/liked-restaurants/liked-restaurants.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
      PageHeaderComponent,
      HeaderComponent,
      FooterComponent,
      LoginComponent,
      RestaurantSearchComponent,
      WhatComponent,
      WhereComponent,
      BudgetComponent,
      RestaurantComponent,
      UserComponent,
      HomeComponent,
      RestaurantListComponent,
      RestaurantItemComponent,
      ClickedDirective,
      AboutusComponent,
      ContactComponent,
      UserProfileComponent,
      UserDescriptionComponent,
      LikedRestaurantsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
      HttpClientModule,
      AngularFontAwesomeModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
