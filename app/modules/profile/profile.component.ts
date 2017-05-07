import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user/user';
import { UserService } from "../shared/user/user.service";

@Component({
    selector: 'profile',
    templateUrl: 'modules/profile/profile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserService],
    // providers: [User]
})
export class ProfileComponent {
    public constructor(private user: User, private userService: UserService){
        console.log(JSON.stringify(this.user));
        this.userService.getUserNameAndId(this.user);
    }
    text: string = 'Profile Page';
}
