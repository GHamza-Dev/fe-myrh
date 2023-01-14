import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OfferItemComponent } from './offer/offer-item/offer-item.component';
import { OffersListComponent } from './offer/offers-list/offers-list.component';
import {OffersComponent} from "./offer/offers.component";
import {AppInterceptor} from "./interceptors/app-interceptor";
import { RegisterRecruiterComponent } from './recruiter/register-recruiter/register-recruiter.component';
import { UpdateProfileImageComponent } from './recruiter/profile-image/update-profile-image/update-profile-image.component';
import {CreateOfferComponent} from "./offer/create-offer/create-offer.component";
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import {MatIconModule} from "@angular/material/icon";
import { PaginationComponent } from './components/pagination/pagination/pagination.component';
import { LogoComponent } from './components/logo/logo.component';
import { ViewOfferComponent } from './offer/view-offer/view-offer.component';
import { OfferReviewComponent } from './offer/offer-review/offer-review.component';
import { AuthorizedDirective } from './directives/authorized.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OffersComponent,
    OfferItemComponent,
    OffersListComponent,
    RegisterRecruiterComponent,
    UpdateProfileImageComponent,
    CreateOfferComponent,
    MainComponent,
    NavComponent,
    PaginationComponent,
    LogoComponent,
    ViewOfferComponent,
    OfferReviewComponent,
    AuthorizedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
