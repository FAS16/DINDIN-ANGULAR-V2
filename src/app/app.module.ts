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
import {PageHeaderComponent} from './home/page-header/page-header.component';
import { ClickedDirective } from './shared/directives/clicked.directive';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDescriptionComponent } from './user/user-profile/user-description/user-description.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BackendService} from './shared/backend/backend.service';
import {RestaurantService} from './restaurant/restaurant.service';
import {RestaurantSearchService} from './home/restaurant-search/restaurant-search.service';
import {ContactComponent} from './contact/contact.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FooterComponent} from './shared/footer-new/footer.component';
import {PersonerComponent} from './aboutus/personer/personer.component';
import {LoadingComponent} from './restaurant/loading/loading.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {ResultGuard} from './guards/result-guard.service';
import { RestaurantProfileComponent } from './restaurant/restaurant-profile/restaurant-profile.component';



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
      ContactComponent,
      UserProfileComponent,
      UserDescriptionComponent,
      AboutusComponent,
      FooterComponent,
      PersonerComponent,
      LoadingComponent,
      PagenotfoundComponent,
      RestaurantProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
      CommonModule,
    AngularFontAwesomeModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
  ],
  providers: [AuthService, UserService, BackendService, RestaurantService, RestaurantSearchService, AuthGuardService, ResultGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
