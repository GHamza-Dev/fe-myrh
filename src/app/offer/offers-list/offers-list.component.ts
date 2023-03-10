import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Offer} from "../../models/offer";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent {
  @Input() offers!: Offer[]
  @Output() onOfferClick = new EventEmitter()
  handelOfferClick(){
    this.onOfferClick.emit()
  }
}
