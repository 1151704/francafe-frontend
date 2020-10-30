import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';

import { REST } from '../url.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = REST + 'login';

  constructor(private http: HttpClient) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(REST + 'validate/');
  }

  isValidateMensualidadProv(nit: string): Observable<boolean> {
    return this.http.get<boolean>(REST + 'validate/'+ nit);
  }

}
