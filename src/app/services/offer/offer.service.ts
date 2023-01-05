import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppResponse} from "../../models/app-response";
import {Offer} from "../../models/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }

  createOffer(offer: Offer){
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    return this.http.post<AppResponse>(`http://localhost:8080/offers/create`,offer, {headers});
  }

  getOffers(page: number, size: number){
    return this.http.get<AppResponse>(`http://localhost:8080/offers/all?page=${page}&size=${size}`);
  }

  getEducationList(){
    return this.http.get<AppResponse>(`http://localhost:8080/educations/all`);
  }

  getJobTitlesList(){
    return this.http.get<AppResponse>(`http://localhost:8080/job-titles/all`);
  }
}
