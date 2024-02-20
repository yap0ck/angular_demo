import { Injectable } from '@angular/core';
import {User} from "../login/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: User[] = [
    new User('Geoffrey', 'Euuuuuh', 'B')
  ];

  connectedUser?: User;

  constructor() { }

  connect(login:string,password:string){
    this.connectedUser = this.users.find((user) => user.login === login);

    if(this.connectedUser){
      if(this.connectedUser.password !== password){
        this.connectedUser = undefined;
      }
    }
  }

  disconnect(){
    this.connectedUser = undefined;
  }
}
