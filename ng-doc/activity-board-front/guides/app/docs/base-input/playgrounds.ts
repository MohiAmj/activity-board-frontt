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
import pageEntity from '../../../../../../src/app/docs/base-input/ng-doc.page';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-doc-playground-1',
  template: `
    <app-Base-input
      [formGroup]="properties['formGroup']"
      [label]="properties['label']"
      [placeholder]="properties['placeholder']"
      [type]="properties['type']"
      [id]="properties['id']"
      [name]="properties['name']"
      [value]="properties['value']"
      [disabled]="properties['disabled']"
      [showRequired]="properties['showRequired']"
      [height]="properties['height']"
      [width]="properties['width']"
      [formControlName]="properties['formControlName']"
    ></app-Base-input>
  `,
  imports: [CommonModule, pageEntity.playgrounds['buttonPlayground'].target],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent1 extends NgDocBasePlayground {
  static readonly selector: string = 'app-base-input';

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
