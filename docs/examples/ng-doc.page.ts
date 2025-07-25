import { NgDocPage } from '@ng-doc/core';
import { Button } from '../../src/app/button/button';

const ExamplesPage: NgDocPage = {
  title: `Examples`,
  mdFile: './index.md',
  demos: { Button },
};

export default ExamplesPage;
