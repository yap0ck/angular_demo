import { Injectable } from '@angular/core';
import {Person} from "../exo-forms/person";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  persons: Person[] = [
    new Person('Beukens', 'Gaetan', new Date("1986-06-13"), 1, "jesaispas",6000, "jesaistjspas")
  ];

  connectedPerson?: Person;

  constructor() {}

  connect(prenom:string, nom:string){
    this.connectedPerson = this.persons.find((person)=> person.prenom === prenom);
    if(this.connectedPerson){
      if(this.connectedPerson.nom !== nom){
        this.connectedPerson = undefined;
      }
    }
  }

  disconnect(){
    this.connectedPerson = undefined
  }
}
