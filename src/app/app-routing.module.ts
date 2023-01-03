import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthorizeGuard } from './services/auth/guards/authorize.guard';
import {OffersComponent} from "./offers/offers.component";

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthorizeGuard]},
  {path: "home", component: HomeComponent, canActivate: [AuthorizeGuard]},
  {path: "login", component: LoginComponent},
  {path: "offers", component: OffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
