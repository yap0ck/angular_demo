import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  @Input() liste!: string[];
  @Output('remove')
  eventEmitter = new EventEmitter<number>();

  remove(i:number){
    this.eventEmitter.emit(i)
  }
}
