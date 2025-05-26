import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    if (authService.isAuthenticate()) {
      return true;
    }

    // Redirect to login page when not authenticated
    return router.createUrlTree(['/login'], {
      queryParams: { returnUrl: state.url }
    });
};
