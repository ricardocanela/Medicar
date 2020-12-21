import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda, ConsultaPost, Especialidade, Medico } from './new-appointment.model';

@Injectable({
  providedIn: 'root'
})
export class NewAppointmentService {

  // private headers = new Headers({'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': '*'});
  private especialidadesUrl = "http://127.0.0.1:8000/especialidades/"
  private medicosUrl = "http://127.0.0.1:8000/medicos/"
  private agendasUrl = "http://127.0.0.1:8000/agendas/"
  private consultaPostUrl = "http://127.0.0.1:8000/consultas/"
  
  constructor(private http: HttpClient) { }

  loadEspecialidades(): Observable<Especialidade[]> {
      return this.http.get<Especialidade[]>(this.especialidadesUrl)
    }
  
  loadMedicos(especialidade: String): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.medicosUrl + '?especialidade='+ especialidade)
  }

  loadAgendas(medico: String): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.agendasUrl + '?medico='+ medico)
  }

  postConsulta(consultaPost: ConsultaPost):Observable<any> {

    let token = localStorage.getItem('token')

    if (token !== null) {
      token = token.replace(/['"]+/g, '')
    }
    
    const headers = { 'Authorization': 'Token ' + token };
    return this.http.post<any>(this.consultaPostUrl, consultaPost, {headers})
  }


}
