import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  standalone: true,
})
export class Button {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled = false;

  @HostBinding('class')
  get classes(): string {
    const colorMap: Record<string, string> = {
      primary: 'bg-gray-900 hover:bg-gray-700 text-white',
      accent: 'bg-pink-500 hover:bg-pink-400 text-white',
      warn: 'bg-red-500 hover:bg-red-400 text-white',
    };

    const base = ['py-3', '!h-20', 'relative', 'px-6', 'rounded-lg'];

    const colorClasses = colorMap[this.color];

    const disabledClasses = this.disabled
      ? 'opacity-50 pointer-events-none'
      : '';

    return [...base, colorClasses, disabledClasses].join(' ');
  }
}
