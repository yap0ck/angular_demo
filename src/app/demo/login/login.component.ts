import { Component } from '@angular/core';
import {User} from "./user";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data = {
    login: '',
    password: ''
  }

  connectedUser?: User

  constructor(
    private readonly loginService: LoginService
  ) {}

  connection(){
    if (this.data.login.trim()){
      this.loginService.connect(this.data.login, this.data.password);
      this.connectedUser = this.loginService.connectedUser;
      if (this.connectedUser){
        this.data.login = '';
        this.data.password= '';
      }
    }
  }

  disconnect(){
    this.loginService.disconnect();
    this.connectedUser = this.loginService.connectedUser
  }
}
