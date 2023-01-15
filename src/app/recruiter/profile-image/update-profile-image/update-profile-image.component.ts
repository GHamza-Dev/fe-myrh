import { Component } from '@angular/core';
import {ProfileImageService} from "../../../services/recruiter/profile/profile-image.service";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-update-profile-image',
  templateUrl: './update-profile-image.component.html',
  styleUrls: ['./update-profile-image.component.scss']
})
export class UpdateProfileImageComponent {
  image!: File;

  constructor(private profileImageService: ProfileImageService) {
  }

  onImageSet(event: any){
    this.image = event.target.files[0];
  }

  uploadImage(){

    if(!this.image) {
      alert("Please choose an image first");
      return;
    }

    const formData = new FormData();
    formData.append('image',this.image,this.image.name)
    this.profileImageService.update(formData).subscribe({
    next: (res)=>{
      alert(res.message);
    },
    error: (error)=>{
      alert('Ops something went wrong, please try again!');
    }
    })
  }
}
