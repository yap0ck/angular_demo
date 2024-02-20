import { CanActivateFn } from '@angular/router';
import {LoginService} from "../services/login.service";
import {inject} from "@angular/core";

export const GEOFFRE_ONLY: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)

  return loginService.connectedUser?.firstName === "Geoffrey";
};
