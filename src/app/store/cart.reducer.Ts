import { CartState } from "./cart.state";
import { add, decrement, increment, remove } from "./cart.action";
import { createReducer, on } from "@ngrx/store";

export const initialState: CartState = {
  lignes: []
};
  
export const cartReducer = createReducer(
    initialState,

    on(add, (state, { lc }) => {
        const lcs = [...state.lignes, lc]
        return ({ ...state, lignes: lcs })
    }),

    on(remove, (state, { nom }) => {
        return ({ ...state, lignes: state.lignes.filter(lc => lc.produit.nom != nom) })
    }),

    on(increment, (state, { nom }) => {
      const result = state.lignes.map(lc => {
        return lc.produit.nom ==  nom ?
        {...lc, qteReserve: lc.qteReserve + 1} : lc
      })
      return ({...state, lignes: result})
    }),

    on(decrement, (state, { nom }) => {
      const result = state.lignes.map(lc => {
        return lc.produit.nom ==  nom ?
        {...lc, qteReserve: lc.qteReserve - 1} : lc
      })
      const i = result.findIndex(lc => lc.produit.nom == nom)
      if (result[i].qteReserve == 0) {
        result.splice(i, 1)
      }
      return ({...state, lignes: result})
    })

)