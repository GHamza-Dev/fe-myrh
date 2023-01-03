import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  jwtToken!: string;
  decodedToken!: { [key: string]: any };

  constructor() {
  }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  getDecodedToken() {
    this.decodeToken();
    return this.decodedToken;
  }

  getSubject() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken?.['sub'] : null;
  }

  getExpiryTime(): number {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken?.['exp'] : 0;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }

}