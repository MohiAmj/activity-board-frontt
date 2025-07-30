// @ts-nocheck
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Routes } from '@angular/router';
import {
  NgDocDemoAssets,
  NgDocPageComponent,
  NgDocRootPage,
} from '@ng-doc/app';
import { isRoute, NgDocPage, NgDocPageType } from '@ng-doc/core';
import entry from '../../../../../../../src/app/docs/examples/ng-doc.page';
import { PLAYGROUND_COMPONENTS, PLAYGROUND_PROVIDERS } from '../playgrounds';
import demoAssets from '../demo-assets';

const pageContent: string = `<p class="ngde">It's time to write some awesome docs!</p><ng-doc-demo componentname="Button" indexable="false" class="ngde"><div id="options" class="ngde">\{\}</div></ng-doc-demo><ng-doc-playground id="buttonPlayground" indexable="false" class="ngde"><div id="selectors" class="ngde">app-button</div><div id="pipeName" class="ngde"></div><div id="data" class="ngde">\{"color":\{"inputName":"color","type":"'primary' | 'accent' | 'warn'","description":"","options":["'primary'","'accent'","'warn'"]\},"disabled":\{"inputName":"disabled","type":"boolean","description":"","options":["false","true"]\}\}</div><div id="options" class="ngde">\{\}</div></ng-doc-playground>`;

@Component({
  selector: 'ng-doc-page-lyzrtq4i',
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
    title: `Examples`,
  },
];

export default routes;
