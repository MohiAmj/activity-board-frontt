import { Meta, StoryObj } from '@storybook/angular';
import { BaseCard } from '../_shared/ui/base-card/base-card';

const componentDescription = `
### 📦 BaseCard

A reusable and highly flexible card component for displaying content in a consistent layout.

---

#### ⚙️ Inputs:

| Name         | Type     | Default         | Description                                     |
|--------------|----------|------------------|-------------------------------------------------|
| \`width\`       | \`string\` | ''               | Width of the card (e.g. \`w-full\`, \`w-1/2\`)    |
| \`height\`      | \`string\` | ''               | Height of the card                               |
| \`bgColor\`     | \`string\` | \`bg-white/10\`   | Background color of the card                     |
| \`borderRadius\`| \`string\` | \`rounded-2xl\`   | Border radius for rounded corners                |
| \`padding\`     | \`string\` | \`p-8\`           | Inner padding of the card                        |
| \`flexFlow\`    | \`string\` | \`flex-row\`      | Flex direction of the card content               |
| \`margin\`      | \`string\` | ''               | Outer margin of the card                         |

---

#### 🧪 Example Usage:

\`\`\`html
<app-base-card
  [width]="'w-full'"
  [bgColor]="'bg-blue-200'"
  [padding]="'p-6'"
>
  <p>Card content goes here</p>
</app-base-card>
\`\`\`
`;

const meta: Meta<BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj<BaseCard>;

export const Default: Story = {
  args: {
    width: 'w-full',
    height: 'h-auto',
    bgColor: 'bg-white',
    padding: 'p-4',
    borderRadius: 'rounded-xl',
    flexFlow: 'flex-col',
    margin: 'm-4',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-base-card
        [width]="width"
        [height]="height"
        [bgColor]="bgColor"
        [padding]="padding"
        [borderRadius]="borderRadius"
        [flexFlow]="flexFlow"
        [margin]="margin"
      >
        <p class="text-black">Hello! This is a sample card.</p>
      </app-base-card>
    `,
  }),
};
