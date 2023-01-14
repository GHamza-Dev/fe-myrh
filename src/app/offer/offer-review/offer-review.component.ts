import {Component, Input} from '@angular/core';
import {OfferService} from "../../services/offer/offer.service";

@Component({
  selector: 'app-offer-review',
  templateUrl: './offer-review.component.html',
  styleUrls: ['./offer-review.component.scss']
})
export class OfferReviewComponent {
  @Input() offerId!: number
  review!: string
  constructor(private offerService: OfferService) {
  }

  submitReview(decision: string){
    let review = new FormData();

    review.append('id',this.offerId.toString())
    review.append('review',this.review)
    this.review = ''

    this.offerService.reviewOffer(review, decision).subscribe({
      next:(value)=>{
        alert(value.message)
      },
      error: (err)=>{
       alert(err.error.message)
      }
    })
  }
}
