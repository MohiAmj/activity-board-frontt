import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-card',
  imports: [CommonModule],
  templateUrl: './base-card.html',
  styleUrl: './base-card.css',
})
export class BaseCard {
  @Input() width = '';
  @Input() height = '';
  @Input() bgColor = 'bg-white/10';
  @Input() borderRadius = 'rounded-2xl';
  @Input() padding = 'p-8';
  @Input() flexFlow = 'flex-row';
  @Input() margin = '';
  @Input() border = 'border border-none';
}
