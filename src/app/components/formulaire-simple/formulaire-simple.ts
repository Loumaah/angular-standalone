import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-simple',
  imports: [],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  nom = 'Doe'

  inputEvent() {
    return this.nom;
  }

  showInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.nom = inputElement.value;
  }

}
