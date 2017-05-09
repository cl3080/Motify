import { Component, ChangeDetectionStrategy,ElementRef, OnInit, ViewChild } from '@angular/core';
import { Page } from'ui/page';
import { RouterExtensions } from "nativescript-angular";
import { Http, Headers, Response, URLSearchParams, RequestOptions} from '@angular/http';
import { NgZone } from "@angular/core";
import { Config } from '../shared/config';
import {View} from 'ui/core/view';
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { User } from "../shared/user/user";


@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    text: string = 'Motify Page';

    constructor(private http: Http, private page: Page, private routerExtensions: RouterExtensions, private ngZone: NgZone, private user: User) {
    }

    ngOnInit() {
        console.log("Posting genid "+ this.user.MapId);
        let searchparam: URLSearchParams = new URLSearchParams();
        searchparam.set("genid", this.user.MapId);
        this.http.get(Config.GetRecommendationUrl, {search: searchparam})
            .map(res => res.json())
            .subscribe((response: any) => {
                console.log(response);
            });
    }
}
