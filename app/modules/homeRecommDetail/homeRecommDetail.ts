import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user/user';
import { UserService } from "../shared/user/user.service";
// var imageSource = require("image-source");


@Component({
    selector: 'homeRecommDetail',
    templateUrl: 'modules/homeRecommDetail/homeRecommDetail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserService],
    // providers: [User]
})
export class HomeRecommDetailComponent {
    imageUrl;

    public constructor(private user: User, private userService: UserService){
        this.imageUrl = this.user.photoUrl;
        // imageSource.fromUrl(this.user.photoUrl)
        //     .then((res) => {
        //     imageSource = res;
        //     console.log("Image fully loaded");
        //     }, function(error) {
        //     console.log("Error Loading Image");
        //     });
    }

    ngOnInit() {
        // this.userService.getUserPhoto(this.user);
    }
    text: string = 'Home Recomm Page';
}
