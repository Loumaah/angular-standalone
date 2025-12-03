import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('user');
  const router = inject(Router);

  // Si l'utilisateur est différent de null
  if(user) {
    // L'accès à la route est autorisé
    return true;
  }

  // Ici l'utilisateur n'est pas authentifié
  // Ne pas utiliser navigate()
  return router.createUrlTree(['/auth']);
};
