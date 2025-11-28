import { Component } from '@angular/core';
import { Stagiaire } from '../../classes/stagiaire';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { GetCharPipe } from '../../pipes/get-char-pipe';
import { EvenValuePipe } from '../../pipes/even-value-pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, // CommonModule pour les pipes / directives Angular courantes / de bases
  RouterLink,
  GetCharPipe,
  EvenValuePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  // Attributs / Propriétés
  title = 'About Component';
  stagiaire = new Stagiaire(25,"Doe", "John");
  stagiaire2 = new Stagiaire(28,"Machin");
  numbers = [2, 3, 5, 7, 11, 13, 16, 19, 23, 29];
  // Attributs exercice bouton disabled
  disabledButton = 2; 
  isDisabled = true;
  // Attibuts exercice affichage liste
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(1, "Dupont", "Jean"),
    new Stagiaire(2, "Durand", "Marie"),
    new Stagiaire(3, "Martin", "Paul"),
    new Stagiaire(4, "Bernard", "Sophie"),
    new Stagiaire(5, "Petit", "Luc"),
  ];
  // Attribut exercice control flow syntax
  moyennes: number[] = [12, 8, 15, 19, 7, 10];
  couleur = 'white';
  bgCouleur= 'tomato';
  style = {
    color: 'white',
    backgroundColor: 'dodgerblue'
  }
  firstname = "Kostas"
  lastname = "Mitroglou"
  ville = "Toulouse"
  codePostal = "31000"
  today = Date.now()
  
  constructor(private router: Router) {}

  // Méthodes
  afficherBonjour() {
    return "Bonjour";
  }
  alertBonjour() {
    alert("Bonjour");
  }

  // Méthode exercice bouton disabled
  flip(id: number) {
    this.disabledButton = id;
  }

  // Correction exercice bouton disabled
  switchState() {
    this.isDisabled = !this.isDisabled
  }

  afficherTexte(event: Event) {
    // Le dernier caractère saisi
    console.log((event as InputEvent).data)

    // Le contenu complet de l'input
    console.log((event.target as HTMLInputElement).value);
  }

  goToStagiaire() {
    // this.router.navigateByUrl('/stagiaire/Clinton/Bill');
    this.router.navigate(['/stagiaire', this.lastname, this.firstname]);
  }

  goToAdresse() {
    this.router.navigate(
      ['/adresse'],
    {
      queryParams: {
        cp: this.codePostal,
        ville: this.ville
      }
    });
  }
}
