import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Education} from "../../models/education";
import {JobTitle} from "../../models/job-title";
import {OfferService} from "../../services/offer/offer.service";
import {Offer} from "../../models/offer";

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit{
  form!: FormGroup
  jobTitlesList!: JobTitle[]

  educationsList!: Education[]

  constructor(private fb: FormBuilder, private offerService: OfferService) {
    this.form = this.fb.group({
      title: "",
      description: "",
      city: "",
      salary: "",
      educationId: "",
      jobTitleId: ""
    })
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

    this.offerService.getEducationList().subscribe({
      next: (res)=>{
        this.educationsList = res.data;
      },
      error: (error)=>{
        alert(error.error.message)
      }
    })
  }

  createOffer(){
    const offer: Offer = this.form.value;
    console.log(offer)

    if(offer){
      this.offerService.createOffer(offer).subscribe({
        next: (res)=>{
          console.log(res)
          alert(res.message)
        },
        error: (error)=>{
          console.log(error)
          alert(error.error.message)
        }
      })
    }
  }
}
