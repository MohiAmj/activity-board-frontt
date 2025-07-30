// @ts-nocheck
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgDocBasePlayground, providePlaygroundDemo } from '@ng-doc/app';
// noinspection ES6UnusedImports
import pageEntity from '../../../../../../src/app/docs/examples/ng-doc.page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-doc-playground-1',
  template: `
    <app-button
      [color]="properties['color']"
      [disabled]="properties['disabled']"
    ></app-button>
  `,
  imports: [CommonModule, pageEntity.playgrounds['buttonPlayground'].target],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
  static readonly selector: string = 'app-button';

  @ViewChild(pageEntity.playgrounds['buttonPlayground'].target, {
    static: true,
  })
  readonly playground: Type<any>;

  @ViewChild(pageEntity.playgrounds['buttonPlayground'].target, {
    static: true,
    read: ViewContainerRef,
  })
  readonly viewContainerRef: ViewContainerRef;

  readonly configData: any = pageEntity.playgrounds['buttonPlayground'].data;

  constructor() {
    super(pageEntity.playgrounds['buttonPlayground'].target);
  }
}

export const PLAYGROUND_COMPONENTS = [PlaygroundComponent1];

export const PLAYGROUND_PROVIDERS = [
  providePlaygroundDemo('buttonPlayground', PlaygroundComponent1),
];
