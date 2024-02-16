import {Component, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  // parent -> enfant
  @Input() liste!: string[];

  //enfant -> parent
  @Output('ajouter')
  eventEmitter = new EventEmitter<string>();

  envoyer(){
    this.eventEmitter.emit("votre valeur")
  }
}
