import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user/user';

@Component({
    selector: 'profile',
    templateUrl: 'modules/profile/profile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [User]
})
export class ProfileComponent {
    public constructor(private user: User){
        console.log(JSON.stringify(this.user.token));
    }
    text: string = 'Profile Page';
}
