import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'modules/trend/trend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendComponent {
  text: string = 'Trend Page';
}
