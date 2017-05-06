import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'trend',
  templateUrl: 'modules/trend/trend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrendComponent {
  text: string = 'Trend Page';
}
