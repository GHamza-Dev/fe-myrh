import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppResponse} from "../../models/app-response";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }

  getOffers(){
    return this.http.get<AppResponse>('http://localhost:8080/offers/all');
  }
}
