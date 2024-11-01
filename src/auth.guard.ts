import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isAuthenticated =  !!window.localStorage.getItem('token');
  if(!isAuthenticated){
    const router = inject(Router);
    router.navigate(['/auth']);
  }
  return isAuthenticated;
};
