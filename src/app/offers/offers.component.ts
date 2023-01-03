import {Component, OnInit} from '@angular/core';
import {OfferService} from "../services/offer/offer.service";
import {Offer} from "../models/offer";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit{

  offers: Offer[] = [];
  totalPages: number[] = [];
  number: number = 0;
  first: boolean = true;
  last: boolean = true;
  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offerService.getOffers(0,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.totalPages = Array.from(Array(res.pagination?.['totalPages']),(x,i)=>i)
        this.number = res.pagination?.['number'];
        this.first = res.pagination?.['first'];
        this.last = res.pagination?.['last'];
        console.log(res)
      }
    )
  }

  getOffersByPage(page: number){
    this.offerService.getOffers(page,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.totalPages = Array.from(Array(res.pagination?.['totalPages']),(x,i)=>i)
        this.number = res.pagination?.['number'];
        this.first = res.pagination?.['first'];
        this.last = res.pagination?.['last'];
        console.log(res)
      }
    )
  }


}
