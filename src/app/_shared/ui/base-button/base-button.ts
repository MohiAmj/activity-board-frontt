import { Component, input } from '@angular/core';

export type ButtonColor = 'primary' | 'accent';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.html',
  styleUrl: './base-button.css',
})
export class BaseButton {
  // @Input() color: ButtonColor = 'primary';

  color = input<ButtonColor>('primary');
}
