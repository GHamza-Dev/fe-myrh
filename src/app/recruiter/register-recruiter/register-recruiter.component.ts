import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../services/recruiter/register/register.service";
import {Recruiter} from "../../models/recruiter";

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styleUrls: ['./register-recruiter.component.scss']
})
export class RegisterRecruiterComponent {
  form!: FormGroup

  constructor(private fb: FormBuilder,private registerService: RegisterService) {
    this.form = this.fb.group({
      email: "",
      phone: "",
      password: "",
      image: "",
      companyName: ""
    })
  }

  register(){
    const recruiter: Recruiter = this.form.value;
    this.registerService.register(recruiter).subscribe(
      (res)=>{
        alert(res.message)
      },
      (error)=>{
        alert(error.error.message)
      }
    )
  }
}
