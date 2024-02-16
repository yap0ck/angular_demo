import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  @Output('updateScore')
  eventEmitter = new EventEmitter<number>();

  inputUser!: number
  round: number = 0
  messages: string[] =[];


  justePrix = Math.floor(Math.random() * ((1000 - 0) + 1));

  verify(){
    if (this.inputUser === this.justePrix) {
      this.eventEmitter.emit(0);
      this.messages.push('winner chicken dinner')
      this.reset();
    } else if (this.inputUser < this.justePrix){
      this.round += 1;
      this.messages.push('le nombre recherché est plus grand')
    } else {
      this.round += 1;
      this.messages.push('le nombre recherché est plus petit')
    }
    if (this.round === 9){
      this.eventEmitter.emit(1);
      this.messages.push('Game Over');
      this.reset();
    }
  }
  reset(){
    this.round = 0;
    this.messages = [];
    this.justePrix = Math.floor(Math.random() * ((1000 - 0) + 1));
  }
}
