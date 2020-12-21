import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signin } from './signin.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private baseUrl = "http://127.0.0.1:8000/users/"
  
  constructor(private http: HttpClient) { }

  createUser(signin: Signin): Observable<Signin> {
    return this.http.post<Signin>(this.baseUrl, signin)
  }


}
