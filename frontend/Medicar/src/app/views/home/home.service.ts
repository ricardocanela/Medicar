import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './home.model'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private consultasUrl = "http://127.0.0.1:8000/consultas/"
  private desmarcarUrl = "http://127.0.0.1:8000/consultas/"

  constructor(private http: HttpClient) { }

  loadConsultas(): Observable<Consulta[]> {
    let token = localStorage.getItem('token')

    if (token !== null) {
      token = token.replace(/['"]+/g, '')
    }
    const headers = { 'Authorization': 'Token ' + token };

    return this.http.get<Consulta[]>(this.consultasUrl, { headers })
  }

  desmarcar(id: string): Observable<Consulta[]> {
    let token = localStorage.getItem('token')

    if (token !== null) {
      token = token.replace(/['"]+/g, '')
    }
    const headers = { 'Authorization': 'Token ' + token };

    return this.http.delete<Consulta[]>(this.desmarcarUrl + id + '/', { headers })
  }
}
