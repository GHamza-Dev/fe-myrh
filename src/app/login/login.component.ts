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
      this.authService.authenticate(values.email,values.password).subscribe({
        next:(value)=>{
          this.localStorageService.set("token",value.token);
          this.authService.setToken(value.token)
          this.router.navigateByUrl('/offers').then(r => r);
        },
        error:(err)=>{
          alert("Wrong email or password!")
        }
      })
    }

  }
}
