import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Recruiter} from "../../../models/recruiter";
import {AppResponse} from "../../../models/app-response";
import {env} from "config/env"

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(recruiter: Recruiter){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AppResponse>(`${url}/recruiters/register`,recruiter,{headers});
  }
}
