import { BaseInput } from '../../_shared/ui/base-input/base-input';
class NgDocPage {}
const BaseInputPage: NgDocPage = {
  title: `base-input`,
  mdFile: './index.md',
  demos: { BaseInput },
  playgrounds: {
    buttonPlayground: {
      target: BaseInput,
      template: '<app-Base-input></app-Base-input>',
    },
  },
};

export default BaseInputPage;
