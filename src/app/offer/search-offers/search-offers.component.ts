import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JobTitle} from "../../models/job-title";
import {OfferService} from "../../services/offer/offer.service";

@Component({
  selector: 'app-search-offers',
  templateUrl: './search-offers.component.html',
  styleUrls: ['./search-offers.component.scss']
})
export class SearchOffersComponent implements OnInit{
  @Output() onSearch = new EventEmitter()
  jobTitlesList!: JobTitle[]
  title = '';
  jobTitleId = 0;
  city = '';


  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.offerService.getJobTitlesList().subscribe({
      next: (res)=>{
        this.jobTitlesList = res.data;
      },
      error: (error)=>{
        alert(error.error.message)
      }
    })
  }

  handleSearchClick(){
    this.onSearch.emit(
      {
        title: this.title,
        jobTitleId: this.jobTitleId,
        city: this.city
      }
    )
  }

  setJobTitleId(event: any){
    this.jobTitleId = event.target.value;
  }
}
