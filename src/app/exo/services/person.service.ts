import { Injectable } from '@angular/core';
import {Person} from "../exo-forms/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personList: Person[] = []
  constructor() {
  }

  add(person:Person){
    this.personList.push(person)
  }

  get(){
    return this.personList
  }
}
