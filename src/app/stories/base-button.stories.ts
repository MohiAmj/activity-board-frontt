import type { Meta, StoryObj } from '@storybook/angular';
import { LucideAngularModule } from 'lucide-angular';
import { LucideIcons } from '../_shared/icons/lucide-icons';
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
| \`labelType\`   | \`'string'\` | Text Type for show button text |
| \`bgColor\`   | \`'primary' | 'accent' | 'warn' | 'success'\` | Sets the button background color     |
| \`disabled\`  | \`boolean\` | If \`true\`, disables the button                      |
| \`size\`      | \`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'\` | Defines the button size             |
| \`rounded\`   | \`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'\` | Controls the border radius styling |
| \`icon\`   | \`'string' | 'null'\` | Icon for button |


---

#### 💡 Example Usage:

\`\`\`html
<app-base-button [labelType]="'button2'" [icon]='home' [rounded]="'lg'"  [disabled]="false" [bgColor]="'primary'" [size]="'xl'" [label]="'Click me'"></app-base-button>
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
    labelType: {
      control: {
        type: 'select',
      },
      options: ['button1', 'button2'],
    },
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
      imports: [BaseButton, LucideAngularModule.pick(LucideIcons)],
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
    icon: 'home',
    labelType: 'button2',
  },

  parameters: {
    docs: {
      description: {
        story: `This is the **Primary** variant of the button. Use it for main CTAs (Call to Actions).`,
      },
      source: {
        code: `<app-base-button [labelType]="'button2'" [icon]='home' [rounded]="'lg'"  [disabled]="false" [bgColor]="'primary'" [size]="'xl'" [label]="'Click me'"></app-base-button>`,
        language: 'html',
      },
    },
  },
};
