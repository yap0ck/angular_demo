import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-pipe',
  templateUrl: './exo-pipe.component.html',
  styleUrl: './exo-pipe.component.css'
})
export class ExoPipeComponent {
  seconds = 0
  stop: boolean = false
  start(){
    this.stop = false
      let timer = setInterval(() => {
        if (!this.stop)
          this.seconds++;
    }, 1000);
  }

}
