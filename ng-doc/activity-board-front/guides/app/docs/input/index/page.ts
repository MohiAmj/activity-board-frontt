// @ts-nocheck
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NgDocDemoAssets,
  NgDocPageComponent,
  NgDocRootPage,
} from '@ng-doc/app';
import { isRoute, NgDocPage, NgDocPageType } from '@ng-doc/core';
import entry from '../../../../../../../src/app/docs/input/ng-doc.page';
import { PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS } from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">It's time to write some awesome docs!</p><ng-doc-demo componentname="InputTest" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo>`;

@Component({
  selector: 'ng-doc-page-gg2q4ela',
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
    title: `input`,
  },
];

export default routes;
