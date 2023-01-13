import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: StorageService,
    private router: Router){
    this.form = this.fb.group({
      email: "",
      password: ""
    });
  }

  login(){
    const values = this.form.value;

    if(values.email && values.password){
      this.authService.authenticate(values.email,values.password).subscribe(
        (res) => {
          console.log(res)
          if(res.status == 200){
            this.localStorageService.set("token",res.token);
            this.router.navigateByUrl('/offers');
          }else{
            this.router.navigateByUrl('/login');
          }
        }
      )
    }

  }
}
