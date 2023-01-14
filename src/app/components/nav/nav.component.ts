import {Component, OnInit} from '@angular/core';
import {Principal} from "../../models/principal";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  user!: Principal

  dropDownMenuOpened = false

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.principal$.subscribe({
      next:(value)=>{
        this.user = <Principal>value
      }
    })
  }

  doLogout(){
    this.auth.logout()
  }

}
