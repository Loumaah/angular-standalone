import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenValue',
})
export class EvenValuePipe implements PipeTransform {

  // Créer un pipe qui permet de retourner dans tableau les valeurs paires d'un tableau

  transform(value: number[], ...args: number[]): number[] {
    return value.filter(num => num % 2 === 0);
  }

}
