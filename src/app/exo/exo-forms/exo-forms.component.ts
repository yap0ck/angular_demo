import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {inThePast} from "../../demo/demo-forms/ValidatorsCustom";
import {Person} from "./person";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrl: './exo-forms.component.css'
})
export class ExoFormsComponent {
  form: FormGroup;
  person?: Person
  personList?: Person[]

  constructor(private _formBuilder: FormBuilder, private _personService: PersonService) {
    this.form = this._formBuilder.group({
      nom: _formBuilder.control('', Validators.required),
      prenom: _formBuilder.control('', Validators.required),
      dateDeNaissance: _formBuilder.control('', [Validators.required, inThePast()]),
      numero: _formBuilder.control('', [Validators.required, Validators.min(0)]),
      rue: _formBuilder.control('', Validators.required),
      zip: _formBuilder.control('',[Validators.required, Validators.min(1000), Validators.max(9999)]),
      city: _formBuilder.control('', Validators.required)
    });
    this.personList = _personService.get()
  }

  onSubmit(){
    if (this.form.valid){
      this.person = new Person(
        this.form.value.nom,
        this.form.value.prenom,
        this.form.value.dateDeNaissance,
        this.form.value.numero,
        this.form.value.rue,
        this.form.value.zip,
        this.form.value.city
      );
    this._personService.add(this.person);
    }
  }
}
