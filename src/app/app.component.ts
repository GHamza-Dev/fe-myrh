import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {JwtTokenService} from "./services/auth/jwt-token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fe-myrh';

  constructor(private authService: AuthService,
              private jwt: JwtTokenService) {
  }

  ngOnInit(): void {
    this.jwt.setToken(`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWNydWl0ZXJAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9SRUNSVUlURVIiXSwiZXhwIjoxNjczNjgwMjk5LCJpYXQiOjE2NzM2NDQyOTl9.t1TZyhfS4ByaufewqMUewP3EXXuckUFnuwH4NzQVJc0`)
    console.log(this.jwt.getDecodedToken())
  }
}
