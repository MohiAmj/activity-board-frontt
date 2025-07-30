// @ts-nocheck
import { Provider } from '@angular/core';
import {
  NG_DOC_CONTEXT,
  NG_DOC_ROUTE_PREFIX,
  NG_DOC_SHIKI_THEME,
} from '@ng-doc/app/tokens';

export function provideNgDocContext(): Provider[] {
  return [
    {
      provide: NG_DOC_CONTEXT,
      useValue: {
        navigation: [
          {
            title: `base-input`,
            route: '/base-input',
            hidden: false,
            metadata: { description: '', tags: {} },
          },

          {
            title: `Examples`,
            route: '/examples',
            hidden: false,
            metadata: { description: '', tags: {} },
          },

          {
            title: `input`,
            route: '/input',
            hidden: false,
            metadata: { description: '', tags: {} },
          },

          {
            title: `Installation`,
            route: '/installation',
            hidden: false,
            metadata: { description: '', tags: {} },
          },
        ],
      },
    },
    {
      provide: NG_DOC_ROUTE_PREFIX,
      useValue: '',
    },
    {
      provide: NG_DOC_SHIKI_THEME,
      useValue: {
        light: '',
        dark: '',
      },
    },
  ];
}
