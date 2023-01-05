import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppResponse} from "../../../models/app-response";
import {env} from "config/env";

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  constructor(private http: HttpClient) { }

  update(data: FormData){
    return this.http.post<AppResponse>(`${url}/recruiters/profile/update-image`,data);
  }
}
