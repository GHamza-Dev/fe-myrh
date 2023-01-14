import {Component, OnInit} from '@angular/core';
import {OfferService} from "../services/offer/offer.service";
import {Offer} from "../models/offer";
import {Pagination} from "../models/pagination";
import {Principal} from "../models/principal";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit{

  offers: Offer[] = [];
  pagination!: Pagination;
  selectedOffer!: Offer;
  principal!: Principal;
  viewOfferOpened: boolean = false
  constructor(private offerService: OfferService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.offerService.getOffers(0,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.pagination = res.pagination;

        this.offerService.setOffer(res.data[0])

        this.offerService.selectedOffer$.subscribe((_offer)=>{
          this.selectedOffer = <Offer>_offer
        })

      }
    )

    this.auth.principal$.subscribe({
      next: (value)=>{
        this.principal = <Principal>value
      }
    })
  }

  getOffersByPage(page: number){
    this.offerService.getOffers(page,5).subscribe(
      (res) => {
        this.offers = res.data;
        this.pagination = res.pagination
      }
    )
  }

}
