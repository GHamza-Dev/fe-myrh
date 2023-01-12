import {Component, OnInit} from '@angular/core';
import {OfferService} from "../services/offer/offer.service";
import {Offer} from "../models/offer";

@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit{

  offers: Offer[] = [];
  selectedOffer!: Offer;
  viewOfferOpened: boolean = false
  totalPages!: number;
  number: number = 0;
  first: boolean = true;
  last: boolean = true;
  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offerService.getOffers(0,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.totalPages = res.pagination?.['totalPages'];
        this.number = res.pagination?.['number'];
        this.first = res.pagination?.['first'];
        this.last = res.pagination?.['last'];

        this.offerService.setOffer(res.data[0])
        this.offerService.selectedOffer$.subscribe((_offer)=>{
          this.selectedOffer = <Offer>_offer
        })
        console.log(res)
      }
    )
  }

  getOffersByPage(page: number){
    this.offerService.getOffers(page,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.totalPages = res.pagination?.['totalPages']
        this.number = res.pagination?.['number'];
        this.first = res.pagination?.['first'];
        this.last = res.pagination?.['last'];
        console.log(res)
      }
    )
  }


}
