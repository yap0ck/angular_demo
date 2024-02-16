import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number[] = [0,0]
  constructor() { }
  getScore(){
    return this.score
  }

  victoire(){
    this.score[0] = this.score[0]+1
  }
  defaite(){
    this.score[1] = this.score[1]+1
  }

}
