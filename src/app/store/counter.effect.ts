import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { addBy, decrement, increment, updateSign } from "./counter.action";
import { map, withLatestFrom } from "rxjs";
import { selectResult } from "./counter.selector";
import { inject } from "@angular/core";

export class CounterEffect {

  actions$ = inject(Actions)
  store = inject(Store)
    // constructor(
    //     private actions$: Actions,
    //     private store: Store
    // ) { }

  updateSignOnCountChange = createEffect(() => 
    this.actions$.pipe(
      ofType(increment, decrement, addBy), // Actions qui déclenche l'effet
      withLatestFrom(this.store.select(selectResult)), // Valeur qui déclenche la vérification du signe
      map(([_, value]) => {
          const signe = value > 0 ? 'positif' : value == 0 ? 'nul' : 'negatif'
          return updateSign({ signe })
      })
    )
  )

}