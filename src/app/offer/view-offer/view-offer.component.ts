import { Component, Input } from '@angular/core';
import {Offer} from "../../models/offer";

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.scss']
})
export class ViewOfferComponent {
  @Input() offer!: Offer
}
