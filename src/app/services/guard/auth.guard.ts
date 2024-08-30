import {CanActivateFn, Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
import {inject} from '@angular/core';
// {KeycloakService} from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(OAuthService);
  const router = inject(Router);
  if (!tokenService.hasValidAccessToken()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
