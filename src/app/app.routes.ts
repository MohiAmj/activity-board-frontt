import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_modules/playground/playground-module').then(
        (m) => m.PlaygroundModule,
      ),
  },
];
