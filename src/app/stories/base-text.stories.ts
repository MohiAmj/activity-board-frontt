import type { Meta, StoryObj } from '@storybook/angular';
import { BaseText } from '../_shared/ui/base-text/base-text';

const componentDescription = `
### 🚀 BaseTextComponent

A **reusable**, **highly customizable** text component designed for consistent typography across the application.

---

#### 🔧 Features:
- Change text **size** and **font weight** dynamically with \`@Input()\`.
- Predefined typography styles for headers, displays, body texts, and buttons.

---

#### 📥 Inputs:

| Name    | Type                                                                                                                  | Description                                           |
|---------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| \`type\` | \`'display1' \| 'display2' \| 'display3' \| 'display4' \| 'display5' \| 'display6' \| 'display7' \| 'header1' \| 'header2' \| 'header3' \| 'header4' \| 'header5' \| 'header6' \| 'body1' \| 'body2' \| 'body3' \| 'body4' \| 'button1'\` | Defines the typography style for the text. |

---

#### 💡 Example Usage:

\`\`\`html
<app-base-text
  [type]="'header1'"
  class="text-black"
>
  <h1>This is a Text For Test</h1>
</app-base-text>
\`\`\`
`;

const meta: Meta<BaseText> = {
  title: 'Shared/BaseText',
  component: BaseText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'display1',
          'display2',
          'display3',
          'display4',
          'display5',
          'display6',
          'display7',
          'header1',
          'header2',
          'header3',
          'header4',
          'header5',
          'header6',
          'body1',
          'body2',
          'body3',
          'body4',
          'button1',
        ],
      },
      description: `Defines the typography style for the text.`,
    },
  },
};
export default meta;

type Story = StoryObj<BaseText>;

export const Header1: Story = {
  name: 'Header 1 Text',
  args: {
    type: 'header1',
  },
  render: (args) => ({
    props: args,
    template: `<app-base-text [type]="type" class="text-black">
      <h1>This is a text for test</h1>
    </app-base-text>`,
    moduleMetadata: {
      imports: [BaseText],
    },
  }),
  parameters: {
    docs: {
      description: {
        story: `This is the **'header1'** type of the text. Use it for main CTAs (Call to Actions) or primary headings.`,
      },
      source: {
        code: `<app-base-text class="text-black" [type]="'header1'">
  This is a text for test
</app-base-text>`,
        language: 'html',
      },
    },
  },
};
