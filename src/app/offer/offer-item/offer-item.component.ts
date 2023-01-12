import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Offer} from "../../models/offer";
import {OfferService} from "../../services/offer/offer.service";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent {
  @Input() offer!: Offer
  @Output() onOfferClick = new EventEmitter()

  constructor(private offerService: OfferService) {
  }
  selectOffer(offer: Offer){
    this.offerService.setOffer(offer)
    this.onOfferClick.emit()
  }
}
