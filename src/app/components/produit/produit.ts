import { Component, input, output } from '@angular/core';
import { Produit } from '../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})

export class ProduitComponent {
  produit = input.required<Produit>()
  quantitePanier = 0

  sendPanier = output<number>()
  isDisabled = false

  ajouterPanier() {
    if(this.quantitePanier > 0 && this.quantitePanier <= this.produit().quantite) {
      this.sendPanier.emit(this.quantitePanier)
      this.isDisabled = true
    } else {
      alert("Merci de mettre une quantité valide")
    }
  } 
}