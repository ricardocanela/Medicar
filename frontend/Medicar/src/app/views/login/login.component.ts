import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  userLogin: Login = {
    username: '',
    password: '',
    token: ''
  }

  token: String = ''

  constructor(private loginService: LoginService,  
                      private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.getLogin(this.userLogin).subscribe( res => {
      this.token = res.token
      localStorage.setItem('token', JSON.stringify(this.token));
      localStorage.setItem('username', JSON.stringify(this.userLogin.username));
      console.log(this.token)
      this.router.navigate(['/'])
    })
  }
  
  criarConta(): void {
      this.router.navigate(['/signin'])  
  }
}
