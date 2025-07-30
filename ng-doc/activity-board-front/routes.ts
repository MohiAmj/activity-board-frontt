// @ts-nocheck
import { Routes } from '@angular/router';

export const NG_DOC_ROUTING: Routes = [
  {
    path: 'base-input',
    title: `base-input`,
    loadChildren: () => import('./guides/app/docs/base-input/page'),
  },

  {
    path: 'input',
    title: `input`,
    loadChildren: () => import('./guides/app/docs/input/page'),
  },

  {
    path: 'installation',
    title: `Installation`,
    loadChildren: () => import('./guides/app/docs/installation/page'),
  },

  {
    path: 'examples',
    title: `Examples`,
    loadChildren: () => import('./guides/app/docs/examples/page'),
  },
];
