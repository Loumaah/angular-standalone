import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

// Reducers : modifie l'état du panier
// Selectors : ne modifie pas l'état, mais permet d'extraire des données

export const selectCartState = createFeatureSelector<CartState>("cart");

export const selectLignes = createSelector(
  selectCartState,
  (state) => state.lignes
);

export const selectNbProduits = createSelector(
  selectCartState,
  (state) => state.lignes.length
);

export const selectQuantiteTotale = createSelector(
  selectCartState,
  (state) => state.lignes.map(lc => lc.qteReserve).reduce((p, c) => p + c, 0)
);