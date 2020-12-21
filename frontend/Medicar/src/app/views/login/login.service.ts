import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://127.0.0.1:8000/api-token-auth/"
  
  constructor(private http: HttpClient) { }

  getLogin(login: Login): Observable<Login> {
      return this.http.post<Login>(this.baseUrl, login)
    }
  


}
