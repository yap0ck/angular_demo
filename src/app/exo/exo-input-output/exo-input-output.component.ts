import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-input-output',
  templateUrl: './exo-input-output.component.html',
  styleUrl: './exo-input-output.component.css'
})
export class ExoInputOutputComponent {
  article!: string
  panier: string[] =["test", "foiezfofn"]
  ajouter(){
    this.panier.push(this.article)
  }

  removeFromList(i:number){
    this.panier.splice(i,1)
  }
}
