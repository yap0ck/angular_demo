import {Component, Output} from '@angular/core';
import {ScoreService} from "../services/score.service";

@Component({
  selector: 'app-exo-service',
  templateUrl: './exo-service.component.html',
  styleUrl: './exo-service.component.css'
})
export class ExoServiceComponent {
  score: number[] = [];
  constructor(private _scoreService: ScoreService) {
    this.score = this._scoreService.getScore();
  }

  updateScore(id: number){
    if (id == 0){
      this._scoreService.victoire();
    } else {
      this._scoreService.defaite();
    }
  }
}
