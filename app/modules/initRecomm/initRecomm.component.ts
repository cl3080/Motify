import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Page } from'ui/page';


@Component({
    selector: 'initrecomm',
    templateUrl: 'modules/initRecomm/initRecomm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitRecommComponent {
    text: string = ' initRecomm Page';

    constructor(private page: Page) {}

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}
