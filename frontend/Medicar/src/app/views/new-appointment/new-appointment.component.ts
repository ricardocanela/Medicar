import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda, ConsultaPost, Especialidade, Medico } from './new-appointment.model';
import { NewAppointmentService } from './new-appointment.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  especialidades: Especialidade[] = []
  medicos: Medico[] = []
  agendas: Agenda[] = []
  horarios: String[] | undefined = []
  consultaPost: ConsultaPost = {
    agenda_id: '',
    horario: ''
  }

  medicosEnabled: boolean = false
  dataEnabled: boolean = false
  horaEnabled: boolean = false
  confirmarEnabled: boolean = false

  constructor(private newAppointmentService: NewAppointmentService,
              private router: Router) { }

  ngOnInit(): void {
    this.newAppointmentService.loadEspecialidades().subscribe( res => {
      this.especialidades = res  
      }) 
  }

  getMedicos(especialidade: String): void {
    this.newAppointmentService.loadMedicos(especialidade).subscribe( res => {
      this.medicos = res  
      this.medicosEnabled = true
      }) 
  }

  getAgenda(medico: String): void {
    this.newAppointmentService.loadAgendas(medico).subscribe( res => {
      this.agendas = res  
      this.dataEnabled = true
      }) 
  }

  getHorarios(x :number): void {
    
    this.horarios = this.agendas.find(i => i.id == x )?.horarios
    
    this.horaEnabled = true
    // this.consultaPost.agenda_id = agenda
  }

  enableConfirmar(): void {
    this.confirmarEnabled = true
  }

  btnConfirmar(): void {
    console.log(this.consultaPost)
    this.newAppointmentService.postConsulta(this.consultaPost).subscribe( res => {
      console.log(res) 
      }) 
    this.router.navigate(['/'])

  }
  cancelar(): void {
    this.router.navigate(['/'])
  }
}
