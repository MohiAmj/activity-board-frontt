import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  imports: [CommonModule],
  templateUrl: './base-card.html',
  styleUrl: './base-card.css',
})
export class BaseCard {
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() bgColor: string = 'bg-white/10';
  @Input() borderRadius: string = 'rounded-2xl';
  @Input() padding: string = 'p-8';
  @Input() flexFlow: string = 'flex-row';
  @Input() margin: string = '';
}
