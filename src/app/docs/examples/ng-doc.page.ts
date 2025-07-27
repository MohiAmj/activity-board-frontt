import { NgDocPage } from '@ng-doc/core';
import { Button } from '../../button/button';

const ExamplesPage: NgDocPage = {
  title: `Examples`,
  mdFile: './index.md',
  demos: { Button },
  playgrounds: {
    buttonPlayground: {
      target: Button,
      template: '<app-button></app-button>',
    },
  },
};

export default ExamplesPage;
