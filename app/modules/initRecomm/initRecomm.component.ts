import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Page } from'ui/page';
import { RouterExtensions } from "nativescript-angular";


@Component({
    selector: 'initrecomm',
    templateUrl: 'modules/initRecomm/initRecomm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitRecommComponent {
    text: string = ' initRecomm Page';

    constructor(private page: Page, private routerExtensions: RouterExtensions) {this.page.actionBarHidden = true;}

    ngOnInit() {}

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
