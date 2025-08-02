import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_modules/core/core-module').then((m) => m.CoreModule),
  },
  {
    path: 'play-ground',
    loadChildren: () =>
      import('./_modules/playground/playground-module').then(
        (m) => m.PlaygroundModule,
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./_modules/profile/profile-module').then((m) => m.ProfileModule),
  },
];
