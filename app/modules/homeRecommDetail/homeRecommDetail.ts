import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MovieRecommDetail } from '../shared/movierecommdetail/movierecommdetail.component';
// var imageSource = require("image-source");


@Component({
    selector: 'homeRecommDetail',
    templateUrl: 'modules/homeRecommDetail/homeRecommDetail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [User]
})
export class HomeRecommDetailComponent {

    public constructor(private movieRecommDetail: MovieRecommDetail){
        console.log(this.movieRecommDetail.title);
    }

    ngOnInit() {
        // this.userService.getUserPhoto(this.user);
    }
    text: string = 'Home Recomm Page';
}
