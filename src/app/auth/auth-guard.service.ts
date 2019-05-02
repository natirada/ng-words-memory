import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { WordService } from '../edit/words.services';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService,
                private Serword: WordService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let primtion = false;
        primtion = this.auth.ifConnected() && this.Serword.ifLoadData();
        console.log(primtion);
        return primtion;
    }
}