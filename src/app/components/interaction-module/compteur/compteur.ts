import { Component, input } from '@angular/core';
import {  Store } from '@ngrx/store';
import { addBy, decrement, increment } from '../../../store/counter.action';
import { selectResult, selectSigne } from '../../../store/counter.selector';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compteur',
  imports: [CommonModule, FormsModule],
  templateUrl: './compteur.html',
  styleUrl: './compteur.css',
})
export class CompteurComponent {

  result = 0;
  valeur = 0;
  signe = '';

  constructor(private store: Store) {
    store.select(selectResult).subscribe(v => 
      this.result = v
    );

    store.select(selectSigne).subscribe(s => 
      this.signe = s
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  ajouterValeur() {
    this.store.dispatch(addBy({ value: this.valeur }));
  }
}