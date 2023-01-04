import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from 'src/app/models/auth-response';
import {Router} from "@angular/router";
import {LocalStorageService} from "../storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private localStorageService: LocalStorageService) { }

  login(email: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AuthResponse>('http://localhost:8080/users/login',{email, password},{headers});
  }

  logout(){
    this.localStorageService.remove("token");
    this.router.navigateByUrl('/home');
  }
}
