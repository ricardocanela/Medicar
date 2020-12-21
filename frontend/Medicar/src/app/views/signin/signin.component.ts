import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from './signin.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hidePassword = true;
  hideConfirmPassword = true;

  userSignin: Signin = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private signinService: SigninService,  
              private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.signinService.createUser(this.userSignin).subscribe( res => {
      this.router.navigate(['/login'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/login'])  
}

}
