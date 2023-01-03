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
  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(
      (res) => this.offers = res.data
    )
  }


}
