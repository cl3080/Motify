import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'modules/search/search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    text: string = 'Search Page';
}
