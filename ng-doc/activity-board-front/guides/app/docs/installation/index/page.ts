// @ts-nocheck
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NgDocDemoAssets,
  NgDocPageComponent,
  NgDocRootPage,
} from '@ng-doc/app';
import { isRoute, NgDocPage, NgDocPageType } from '@ng-doc/core';
import entry from '../../../../../../../src/app/docs/installation/ng-doc.page';
import { PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS } from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">It's time to write some awesome docs!</p>`;

@Component({
  selector: 'ng-doc-page-06owvzup',
  template: `<ng-doc-page></ng-doc-page>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgDocPageComponent, ...PLAYGROUND_COMPONENTS],
  providers: [
    { provide: NgDocRootPage, useExisting: PageComponent },
    PLAYGROUND_PROVIDERS,
    entry.providers ?? [],
  ],
})
export class PageComponent extends NgDocRootPage {
  readonly pageType: NgDocPageType = 'guide';
  readonly pageContent: string = pageContent;
  readonly page?: NgDocPage = entry;
  readonly demoAssets: NgDocDemoAssets = demoAssets;

  constructor() {
    super();
  }
}

const routes: Routes = [
  {
    ...(isRoute(entry.route) ? entry.route : {}),
    path: '',
    component: PageComponent,
    title: `Installation`,
  },
];

export default routes;
