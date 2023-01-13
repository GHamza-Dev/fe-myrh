import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from 'src/app/models/auth-response';
import {Router} from "@angular/router";
import {StorageService} from "../storage/storage.service";
import {env} from "config/env";
import {JwtTokenService} from "./jwt-token.service";

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string | null
  constructor(private http: HttpClient,
              private router: Router,
              private storageService: StorageService,
              private jwt: JwtTokenService) {

    this.token = localStorage.getItem('token')

  }

  authenticate(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AuthResponse>(`${url}/users/login`,{email, password},{headers});
  }

  logout(){
    this.storageService.remove("token");
    this.token = null;
    this.router.navigateByUrl('/offers');
  }

  setToken(token: string){
    this.token = token
  }

  isAuthorized(role: string = '*'): boolean{

    if (!this.token) {
      console.warn("No token found!")
      return false;
    }

    this.jwt.setToken(this.token)

    if(!this.jwt.getSubject()) {
      console.warn("No subject found in the given token!")
      return false;
    }

    if(this.jwt.isTokenExpired()){
      console.warn("Token is expired!")
      return false;
    }

    if(role != '*'){
      if (!this.jwt.getRoles().includes(role)) {
        console.warn("Does not have the qualified role!")
        return false
      }
    }

    return true;
  }

}
