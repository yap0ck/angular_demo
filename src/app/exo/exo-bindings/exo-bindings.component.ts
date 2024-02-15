import { Component } from '@angular/core';
import { differenceInYears, parse } from 'date-fns';

@Component({
  selector: 'app-exo-bindings',
  templateUrl: './exo-bindings.component.html',
  styleUrl: './exo-bindings.component.css'
})
export class ExoBindingsComponent {
  dateDeNaissance: Date|undefined;
  calculAge(): void{
    if (!this.dateDeNaissance) {
      alert("Veuillez entrer une date de naissance valide.");
      return;
    }
    const age = differenceInYears(new Date(), this.dateDeNaissance)
    alert("vous avez "+ age+ " ans")
  }
}
