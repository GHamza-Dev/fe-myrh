import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppResponse} from "../../../models/app-response";

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  constructor(private http: HttpClient) { }

  update(data: FormData){
    return this.http.post<AppResponse>(`http://localhost:8080/recruiters/profile/update-image`,data);
  }
}
