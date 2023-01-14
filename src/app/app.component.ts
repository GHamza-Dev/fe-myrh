import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {JwtTokenService} from "./services/auth/jwt-token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-myrh';

  constructor(private authService: AuthService,
              private jwt: JwtTokenService) {
  }

}
