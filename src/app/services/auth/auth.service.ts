import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from 'src/app/models/auth-response';
import {Router} from "@angular/router";
import {StorageService} from "../storage/storage.service";
import {env} from "config/env";

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private storageService: StorageService) { }

  login(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AuthResponse>(`${url}/users/login`,{email, password},{headers});
  }

  logout(){
    this.storageService.remove("token");
    this.router.navigateByUrl('/home');
  }
}
