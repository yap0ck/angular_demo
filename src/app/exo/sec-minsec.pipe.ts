import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secMinsec'
})
export class SecMinsecPipe implements PipeTransform {

  transform(value: number): string {
    let resultat: string;
    if (value < 60)
      resultat = value + " secondes"
    else
      resultat = Math.floor(value / 60) + "minutes " + (value % 60)
    return resultat;
  }

}
