import { Component } from '@angular/core';
import { LigneCommande } from '../../../models/ligne-commande';
import { selectLignes } from '../../../store/cart.selector';
import { Store } from '@ngrx/store';
import { decrement, increment, remove } from '../../../store/cart.action';

@Component({
  selector: 'app-panier',
  imports: [],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class PanierComponent {

  lignesCommandes: LigneCommande[] = []

  constructor(private store: Store) {
    store.select(selectLignes).subscribe(res => {
      this.lignesCommandes = res
    })
  }

  supprimer(nom: string) {
    this.store.dispatch(remove({ nom }));
  }

  incrementer(nom: string) {
    this.store.dispatch(increment({ nom }));
  }

  decrementer(nom: string) {
    this.store.dispatch(decrement({ nom }));
  }
}