import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private router: Router) {}
    Token: string;
    changedToken = new Subject<Boolean>();
    signup(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).
        catch(
            error => console.log(error)
        );
    }

    signin(email: string, password: string) {
       firebase.auth().signInWithEmailAndPassword(email,password).
        then(
            (response) => {
                console.log(response);
                firebase.auth().currentUser.getIdToken().then(
                    (token) => {
                        this.Token = token;
                        this.changedToken.next(true);
                    }
                );
            }
        ).catch(
            error => console.log(error)
        );
    }

    getToken() {

        firebase.auth().currentUser.getIdToken().
        then(
            (token) => {
                this.Token = token;
            }
        );

        return this.Token;
    }
    ifConnected() {
        return this.Token != null ;
    }
}