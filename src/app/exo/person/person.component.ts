import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Person} from "../exo-forms/person";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person?: Person
  constructor(private _loginService:LoginService, private _activatedRoute:ActivatedRoute) {
    let nom = this._activatedRoute.snapshot.params['nom'];
    this.person= this._loginService.persons.find((person)=> person.nom === nom)
  }
}
