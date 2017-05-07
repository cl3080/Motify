import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from './user';
import { Config } from '../config';

@Injectable()
export class UserService {
    constructor(private http: Http, private user: User) {}

    getUserNameAndId(user: User) {
        this.http.get( Config.GetUserIdentityUrl + "me?access_token=" + user.token.toString())
            .map(res => res.json())
            .subscribe((response: any) => {
            console.log(JSON.stringify(response));
            user.name = response.name;
            user.id = response.id;
            console.log("User name and ID is fetched")
            })

    }
}