import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Recruiter} from "../../../models/recruiter";
import {AuthResponse} from "../../../models/auth-response";
import {AppResponse} from "../../../models/app-response";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(recruiter: Recruiter){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AppResponse>('http://localhost:8080/recruiters/register',recruiter,{headers});
  }
}
