import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Personne } from '../../models/personne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-simple',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire-simple.html',
  styleUrl: './formulaire-simple.css',
})
export class FormulaireSimpleComponent {
  nom = 'Doe'

  personne: Personne = {}
  personnes: Personne[] = [];

  /*
  Dans une balise form, ajouter trois champs
  nom,
  prenom
  age
  et un bouton de soumission
  en cliquant sur le bouton on affiche 
  les données du formulaire dans la console
  sous forme d'objet 
  */

  onSubmit(form: NgForm) {
    console.log(this.personne);
    console.log(form.value);  

    // Afficher les personnes ajoutées dans une liste HTML
    // en dessous du formulaire
    this.personnes.push({...this.personne});
    console.log(this.personnes);

    form.reset();
  }

}