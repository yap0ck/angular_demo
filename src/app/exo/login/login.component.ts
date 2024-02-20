import { Component } from '@angular/core';
import {Person} from "../exo-forms/person";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data={
    login: '',
    password: ''
  }

  connectedPerson?: Person;

  constructor(
    private readonly loginService: LoginService,
    private _router: Router
  ) {}

  connection(){
    if(this.data.login.trim()){
      this.loginService.connect(this.data.login, this.data.password);
      this.connectedPerson = this.loginService.connectedPerson;
      this._router.navigate(['exo/person/'+this.connectedPerson?.nom])
    }
  }
}
