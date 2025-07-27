import { NgDocPage } from '@ng-doc/core';
import { BaseButton } from '../../_shared/ui/base-button/base-button';

const BaseButtonPage: NgDocPage = {
  title: `Base-Button`,
  mdFile: './index.md',
  demos: {
    BaseButton,
  },
  playgrounds: {
    baseButtonPlayground: {
      target: BaseButton,
      template: '<app-base-button [color]="color"></app-base-button>',
      inputs: {
        color: 'ButtonColor',
      },
    },
  },
};

export default BaseButtonPage;
