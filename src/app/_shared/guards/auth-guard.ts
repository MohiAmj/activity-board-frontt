import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (): boolean => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const token: string | null = authService.getToken;
  if (token) {
    // const decoded = authService.decodePayload(token);
    authService.validateOnServer().subscribe((isValid: boolean) => {
      if (isValid) {
        const isExpired: boolean = authService.isTokenExpired();
        if (isExpired) {
          router.navigate(['/login']).then(() => {
            return true;
          });
          return false;
        } else {
          return true;
        }
      } else {
        router.navigate(['/login']).then(() => {
          return true;
        });
        return false;
      }
    });
  } else {
    router.navigate(['/login']).then(() => {
      return true;
    });
    return false;
  }

  return true;
};
