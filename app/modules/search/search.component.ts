import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Config } from '../shared/config';

@Component({
    selector: 'search',
    templateUrl: 'modules/search/search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    text: string = 'Search Page';
    querystring: string = '';
    SearchMovieResultList;
    fetchedMovie = true;

    constructor(private http: Http) {
        this.SearchMovieResultList = [];
    }

    executesearch() {
        var queryitem = this.querystring;
        this.querystring = '';
        let searchparam: URLSearchParams = new URLSearchParams();
        searchparam.set("api_key", Config.TMDBAPIKEY);
        searchparam.set("language","en-US");
        searchparam.set("query", queryitem);
        searchparam.set("page", "1");
        searchparam.set("include_adult","false");
        this.http.get(Config.SearchMovieUrl, {search: searchparam})
            .map(res => res.json())
            .subscribe((response: any) => {
            var results = JSON.parse(JSON.stringify(response.results));
            var len = results.length;
            if ( len > 0 ) {
                var movieitem;
                if (len > 5) {
                    for ( var i = 0; i <5 ; i++) {
                        movieitem = {
                            overview: results[i].overview,
                            genre: results[i].genre_ids.map(Number),
                            id: results[i].id,
                            thumbposterUrl: Config.GetMovieImage + 'w92' + results[i].poster_path,
                            releaseDate: results[i].release_date,
                            title: results[i].title,
                            vote: results[i].vote_average
                        };
                        this.SearchMovieResultList.push(movieitem);
                    }
                    console.log(" Top 5 Movies are collected");
                    console.log(JSON.stringify(this.SearchMovieResultList));
                }
                else {
                    for ( var i = 0; i <len ; i++) {
                        movieitem = {
                            overview: results[i].overview,
                            genre: results[i].genre_ids.map(Number),
                            id: results[i].id,
                            thumbposterUrl: Config.GetMovieImage + 'w92' + results[i].poster_path,
                            releaseDate: results[i].release_date,
                            title: results[i].title,
                            vote: results[i].vote_average
                        };
                        this.SearchMovieResultList.push(movieitem);
                    }
                    console.log(" Top " + len +" Movies are collected");
                    console.log(JSON.stringify(this.SearchMovieResultList));
                }
            }
            else{
                this.fetchedMovie = false;
                console.log("None movie is fetched");
            }

            })
    }

}