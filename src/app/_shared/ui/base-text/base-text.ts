import { Component, computed, input, InputSignal } from '@angular/core';
import { TypographyType } from '../../models/typography-model';

@Component({
  selector: 'app-base-text',
  imports: [],
  standalone: true,
  templateUrl: './base-text.html',
  styleUrl: './base-text.css',
})
export class BaseText {
  type: InputSignal<TypographyType> = input<TypographyType>('display1');

  typeToClassMap: Record<TypographyType, string> = {
    display1: 'font-extrabold text-9xl',
    display2: 'font-extrabold text-8xl',
    display3: 'font-semibold text-7xl',
    display4: 'font-normal text-6xl',
    display5: 'font-extrabold text-5xl',
    display6: 'font-semibold text-4xl',
    display7: 'font-normal text-3xl',
    header1: 'font-bold text-4xl',
    header2: 'font-bold text-3xl',
    header3: 'font-extrabold text-2xl',
    header4: 'font-bold text-xl',
    header5: 'font-bold text-base',
    header6: 'font-bold text-sm',
    body1: 'font-normal text-base',
    body2: 'font-normal text-lg',
    body3: 'font-light text-sm',
    body4: 'font-light text-xs',
    button1: 'font-bold text-base',
    button2: 'font-bold text-xs',
  };

  classes: InputSignal<string> = input<string>('');

  readonly typeClass = computed(() => this.typeToClassMap[this.type()]);
}
