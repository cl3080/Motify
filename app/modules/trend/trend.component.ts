import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { Config } from '../shared/config';
import { Movie } from '../shared/movie/movie';
@Component({
  selector: 'trend',
  templateUrl: 'modules/trend/trend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendComponent {
  constructor(private http: Http){}
  text: string = 'Trend Page';
  Movielist : [Movie];
  movie : Movie;
  ngOnInit() {
    let popularparam : URLSearchParams = new URLSearchParams();
    popularparam.set("api_key",Config.TMDBAPIKEY);
    popularparam.set("language","en-US");
    this.http.get(Config.GetPopularMovie,{search: popularparam})
    .map(res => res.json())
    .subscribe((response: any) => {
      
      for(var item of response.results){
        console.log(JSON.stringify(item));
        this.movie.overview = item.overview;
        this.movie.genre = item.genre_ids.map(Number);
        this.movie.id = item.id;
        this.movie.posterUrl = item.poster_path;
        this.movie.releaseDate = item.release_date;
        this.movie.title = item.title;
        this.Movielist.push(this.movie);
      }

      console.log("Add Movie Completed!");
    });
  }
}
