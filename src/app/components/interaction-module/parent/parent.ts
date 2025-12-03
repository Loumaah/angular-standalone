import { Component } from '@angular/core';
import { ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class ParentComponent {

  noms =['Simpson', 'Burns', 'Flanders']
  moyenne = 0
  somme = 0
  nbNotes = 0

  calculerMoyenne(note: number) {
    this.somme += note
    this.nbNotes++
    this.moyenne = this.somme / this.nbNotes
  }
  
}
