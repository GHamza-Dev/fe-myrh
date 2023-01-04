import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OfferItemComponent } from './offers/offer-item/offer-item.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import {OffersComponent} from "./offers/offers.component";
import {AppInterceptor} from "./interceptors/app-interceptor";
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';
import { UpdateProfileImageComponent } from './recruiter/profile-image/update-profile-image/update-profile-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OffersComponent,
    OfferItemComponent,
    OffersListComponent,
    RegisterRecruiterComponent,
    UpdateProfileImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
