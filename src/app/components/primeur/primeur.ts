import { Component } from '@angular/core';
import { ProduitComponent } from '../produit/produit';
import { FormsModule, NgForm } from '@angular/forms';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-primeur',
  imports: [ProduitComponent, FormsModule],
  templateUrl: './primeur.html',
  styleUrl: './primeur.css',
})
export class PrimeurComponent {

  nouveauProduit: Produit = { nom: '', prix: 0, quantite: 0 }

  produits: Produit[] = [
    { nom: 'Pomme', prix: 1.2, quantite: 10 },
    { nom: 'Banane', prix: 0.8, quantite: 15 },
    { nom: 'Orange', prix: 1.5, quantite: 20}
  ];

  ajouterProduit() {
    this.produits.push(this.nouveauProduit);
    this.nouveauProduit = { nom: '', prix: 0, quantite: 0 };
  }

}