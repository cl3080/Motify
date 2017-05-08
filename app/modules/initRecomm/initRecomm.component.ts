import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Page } from'ui/page';
import { RouterExtensions } from "nativescript-angular";
import { Recommendation } from '../shared/recommendation/recommendation';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import {Config} from "../shared/config";
import { NgZone } from "@angular/core";


@Component({
    selector: 'initrecomm',
    templateUrl: 'modules/initRecomm/initRecomm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitRecommComponent {
    MovieName: string;
    text: string = ' initRecomm Page';
    movieitem;

    constructor(private page: Page, private routerExtensions: RouterExtensions,
                private recommendation: Recommendation, private http: Http, private ngZone: NgZone) {
        this.movieitem = [];
        this.page.actionBarHidden = true;
        this.recommendation.MovieIndex1 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex2 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex3 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex4 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex5 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex6 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex7 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex8 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex9 = this.randomIntFromInterval(1,40100);
        this.recommendation.MovieIndex10 = this.randomIntFromInterval(1,40100);
    }
    randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }


    ngOnInit() {
        console.log("The series Random Index is: ...")
        console.log("MovieIndex1:" + this.recommendation.MovieIndex1);
        console.log("MovieIndex2:" + this.recommendation.MovieIndex2);
        console.log("MovieIndex3:" + this.recommendation.MovieIndex3);
        console.log("MovieIndex4:" + this.recommendation.MovieIndex4);
        console.log("MovieIndex5:" + this.recommendation.MovieIndex5);
        console.log("MovieIndex6:" + this.recommendation.MovieIndex6);
        console.log("MovieIndex7:" + this.recommendation.MovieIndex7);
        console.log("MovieIndex8:" + this.recommendation.MovieIndex8);
        console.log("MovieIndex9:" + this.recommendation.MovieIndex9);
        console.log("MovieIndex10:" + this.recommendation.MovieIndex10);
        console.log("start to fetch Movie Infomation of MovieIndex", this.recommendation.MovieIndex1);
        let searchparam: URLSearchParams = new URLSearchParams();
        searchparam.set("MovieId",this.recommendation.MovieIndex1.toString());
        this.http.get(Config.GetMovieNameByIndexUrl, {search: searchparam})
            .map(res => res.json())
            .subscribe((response: any) => {
            this.recommendation.MovieNameOriginal1 = JSON.stringify(response['MovieName']);
            if (this.recommendation.MovieNameOriginal1.trim().indexOf(",") > 0) {
                this.recommendation.MovieRecomm1 = this.recommendation.MovieNameOriginal1.trim().slice(0, this.recommendation.MovieNameOriginal1.indexOf(","));
            }
            else{
                this.recommendation.MovieRecomm1 = this.recommendation.MovieNameOriginal1.trim();
            }
            this.executeSearch();
            })
    }

    executeSearch() {
        this.movieitem = [];
        var queryitem = this.recommendation.MovieRecomm1;
        let searchparam: URLSearchParams = new URLSearchParams();
        searchparam.set("api_key", Config.TMDBAPIKEY);
        searchparam.set("language", "en-US");
        searchparam.set("query", queryitem);
        searchparam.set("page", "1");
        searchparam.set("include_adult", "false");
        this.http.get(Config.SearchMovieUrl, {search: searchparam})
            .map(res => res.json())
            .subscribe((response: any) => {
                var results = JSON.parse(JSON.stringify(response.results));
                var len = results.length;
                var movie;
                if (len > 0) {
                    movie = {
                        overview: (results[0].overview == null || results[0].overview.length === 0 ) ? 'None' : results[0].overview,
                        genre: (results[0].genre_ids == null || results[0].genre_ids.length === 0) ? [0] : results[0].genre_ids.map(Number),
                        id: (results[0].id == null || results[0].length === 0 ) ? 0 : results[0].id,
                        thumbposterUrl: (results[0].poster_path == null || results[0].poster_path.length === 0) ? 'https://cldup.com/7pg616EKAp.png' : Config.GetMovieImage + 'w92' + results[0].poster_path,
                        releaseDate: (results[0].release_date == null || results[0].release_date.length === 0) ? "0000-00-00" : results[0].release_date,
                        title: (results[0].title == null || results[0].title.length === 0) ? 'None' : results[0].title,
                        vote: (results[0].vote_average == null) ? 0 : results[0].vote_average
                    };
                    this.movieitem.push(movie);
                    console.log(" Top 1 Movies are collected");
                }
                else {
                    movie = {
                        overview: 'None',
                        genre: [0],
                        id: 0,
                        thumbposterUrl: 'https://cldup.com/7pg616EKAp.png',
                        releaseDate: "0000-00-00",
                        title: 'None',
                        vote: 0
                    };
                    this.movieitem.push(movie);
                    console.log("None results found");
                }
            })
    }


    //deprecated
//     navigateToHome() {
//         console.log("navigating");
//         this.routerExtensions.navigate(['/home'],{
//             clearHistory: true,
//             transition:{
//                 name: 'flip',
//                 duration: 500,
//                 curve: 'linear'
//             }
//     });
// }

}
