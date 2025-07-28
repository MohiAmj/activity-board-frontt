import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { BaseButton } from '../_shared/ui/base-button/base-button';

const componentDescription = `
### 🚀 ButtonComponent

A **reusable**, **highly customizable** button component designed for consistent UI experiences across the application.

---

#### 🔧 Features:
- Easily reusable across modules or shared UIs
- Fully styleable via \`@Input()\` bindings
- Supports both **solid** and **outline** styles
- Clean, minimal, and scalable design

---

#### 📥 Inputs:

| Name       | Type     | Description                                           |
|------------|----------|-------------------------------------------------------|
| \`label\`     | \`string\`  | The text displayed inside the button                  |
| \`bgColor\`   | \`'primary' | 'accent' | 'warn' | 'success'\` | Sets the button background color     |
| \`disabled\`  | \`boolean\` | If \`true\`, disables the button                      |
| \`size\`      | \`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'\` | Defines the button size             |
| \`rounded\`   | \`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'\` | Controls the border radius styling |

---

#### 💡 Example Usage:

\`\`\`html
<app-base-button
  [label]="'Submit'"
  [bgColor]="'primary'"
  [disabled]="false"
  [size]="'lg'"
  [rounded]="'md'">
</app-base-button>
\`\`\`
`;

const meta: Meta<BaseButton> = {
  title: 'Shared/Button',
  component: BaseButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    bgColor: {
      control: {
        type: 'select',
      },
      options: ['primary', 'accent', 'warn', 'success'],
      description: 'The background color of button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'The Size of button',
    },
    rounded: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'The Rounded of button',
    },
  },
  render: (args) => ({
    props: args,
    moduleMetadata: {
      imports: [CommonModule, BaseButton],
    },
  }),
};

export default meta;

type Story = StoryObj<BaseButton>;

export const Primary: Story = {
  name: 'Primary Button',
  args: {
    label: 'Click me',
    bgColor: 'primary',
    disabled: false,
    size: 'xl',
    rounded: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: `This is the **Primary** variant of the button. Use it for main CTAs (Call to Actions).`,
      },
      source: {
        code: `<app-base-button [rounded]="'lg'"  [disabled]="'false'" [bgColor]="'primary'" [size]="'xl'" [label]="'Click me'"></app-base-button>`,
        language: 'html',
      },
    },
  },
};
