import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base-card',
  imports: [CommonModule],
  templateUrl: './base-card.html',
  styleUrl: './base-card.css',
  standalone: true,
})
export class BaseCard {}
