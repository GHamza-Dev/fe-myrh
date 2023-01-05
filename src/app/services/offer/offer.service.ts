import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppResponse} from "../../models/app-response";
import {Offer} from "../../models/offer";
import {env} from "config/env";

const url = env.url;

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }

  createOffer(offer: Offer){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AppResponse>(`${url}/offers/create`,offer, {headers});
  }

  getOffers(page: number, size: number){
    return this.http.get<AppResponse>(`${url}/offers/all?page=${page}&size=${size}`);
  }

  getEducationList(){
    return this.http.get<AppResponse>(`${url}/educations/all`);
  }

  getJobTitlesList(){
    return this.http.get<AppResponse>(`${url}/job-titles/all`);
  }
}
