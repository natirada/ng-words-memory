import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './userdata.model';
import 'rxjs-compat';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ServerServices {
    constructor(private httpclient: HttpClient,
                private auth: AuthService) {}

    storeDate(userData: UserData) {
      const token = this.auth.getToken();
      return this.httpclient.put('https://ng-word-memory.firebaseio.com/data.json?auth=' + token, userData);
    }

    getUserData() {
     const token = this.auth.getToken();
     return this.httpclient.get<UserData>('https://ng-word-memory.firebaseio.com/data.json?auth=' + token).map(
        (userdata) => {
            return userdata;
        }
      );
    }
}