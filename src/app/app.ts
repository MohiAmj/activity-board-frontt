import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseButton } from './_shared/ui/base-button/base-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('activity-board-front');
}
