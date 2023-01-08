import { Component, Input } from '@angular/core';
import {Offer} from "../../models/offer";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent {
  @Input() offer!: Offer
}
