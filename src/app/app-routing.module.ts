import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthorizeGuard } from './services/auth/guards/authorize.guard';
import {OffersComponent} from "./offer/offers.component";
import {RegisterRecruiterComponent} from "./recruiter/register-recruiter/register-recruiter.component";
import {CreateOfferComponent} from "./offer/create-offer/create-offer.component";

const routes: Routes = [
  {path: "", component: OffersComponent},
  {path: "login", component: LoginComponent},
  {path: "offers", component: OffersComponent},
  {path: "recruiters/register", component: RegisterRecruiterComponent},
  {path: "offers/create", component: CreateOfferComponent, canActivate: [AuthorizeGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
