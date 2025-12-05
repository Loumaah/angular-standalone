import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {

  result = 0;

  increment() {
    this.result++;
  }

  decrement() {
    this.result--;
  }

}