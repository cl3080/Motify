import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Config } from '../shared/config';
import { Movie } from '../shared/movie/movie';

@Component({
  selector: 'trend',
  templateUrl: 'modules/trend/trend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendComponent {
  text: string = 'Trend Page';
  movie: Movie;
  MovieList;

  constructor(private http: Http){
      this.MovieList = [];
  }

  ngOnInit() {
    let popularparam : URLSearchParams = new URLSearchParams();
    popularparam.set("api_key",Config.TMDBAPIKEY);
    popularparam.set("language","en-US");
    this.http.get(Config.GetPopularMovie,{search: popularparam})
    .map(res => res.json())
    .subscribe((response: any) => {
        var results = JSON.parse(JSON.stringify(response.results));
        console.log(results.length);
        console.log(results);
        var movieitem;
        for ( var i =0 ;i <results.length; i++ ) {
            movieitem = {
                overview: results[i].overview,
                genre: results[i].genre_ids.map(Number),
                id: results[i].id,
                posterUrl: results[i].poster_path,
                releaseDate: results[i].release_date,
                title: results[i].title,
            };
            this.MovieList.push(movieitem);
            console.log(movieitem);
            console.log(JSON.stringify(this.MovieList));
            console.log("Added");
        }
      
      // for(var item of results){
      //   console.log(JSON.stringify(item));
      //   this.movie.overview = item.overview;
      //   this.movie.genre = item.genre_ids.map(Number);
      //   this.movie.id = item.id;
      //   this.movie.posterUrl = item.poster_path;
      //   this.movie.releaseDate = item.release_date;
      //   this.movie.title = item.title;
      //   this.Movielist.push(this.movie);
      // }
      // console.log(this.MovieList);
        console.log(this.MovieList.length);
      console.log("All Movies are added to MovieList");
    });
  }
}
