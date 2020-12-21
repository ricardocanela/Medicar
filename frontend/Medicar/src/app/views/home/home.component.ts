import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from './home.model';
import { HomeService } from './home.service';

// const ELEMENT_DATA: Consulta[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', id: 1},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', id: 2},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', id: 3},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', id: 4},
// ];

// {
//   "data":[
//     {"position": 1, "name": 'Hydrogen', "weight": 1.0079, "symbol": 'H', "id": 1},
//     {"position": 2, "name: 'Helium', "weight": 4.0026, "symbol": 'He', "id": 2},
//     {"position": 3, "name": 'Lithium', "weight": 6.941, "symbol": 'Li', "id": 3},
//     {"position": 4, "name": 'Beryllium', "weight": 9.0122, "symbol": 'Be', "id": 4},
//   ]}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  dataSource: Consulta[] = []
  displayedColumns: string[] = ['medico.especialidade.nome', 'medico.nome','dia', 'horario', 'id'];

  username: string|null = ''

  constructor(private homeService: HomeService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadConsultas()
    this.username = localStorage.getItem('username')
    if (this.username !== null) {
      this.username = this.username.replace(/['"]+/g, '')
    }
  }

  loadConsultas(): void {
      this.homeService.loadConsultas().subscribe( res => {
      this.dataSource = res  
      }) 
  }

  novaConsulta(): void {
    this.router.navigate(['/new-appointment'])
  }

  desmarcar(id :string): void {
    console.log(id)
    this.homeService.desmarcar(id).subscribe( () => {
      this.loadConsultas()
    }) 
  }
  desconectar(): void {
    localStorage.setItem('token', JSON.stringify(''));
    localStorage.setItem('username', JSON.stringify(''));
    this.router.navigate(['/login'])
  }
}
