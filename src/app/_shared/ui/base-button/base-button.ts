import { NgClass } from '@angular/common';
import { Component, computed, input, InputSignal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { BaseText } from '../base-text/base-text';
@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.html',
  styleUrl: './base-button.css',
  standalone: true,
  imports: [LucideAngularModule, BaseText, NgClass],
})
export class BaseButton {
  label: InputSignal<string> = input<string>('Base Button');
  labelType: InputSignal<'button1' | 'button2'> = input<'button1' | 'button2'>('button1');
  bgColor: InputSignal<'primary' | 'accent' | 'warn' | 'success'> = input<
    'primary' | 'accent' | 'warn' | 'success'
  >('primary');
  disabled: InputSignal<boolean> = input<boolean>(false);
  size: InputSignal<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'> = input<
    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  >('lg');

  rounded: InputSignal<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'> = input<
    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  >('lg');

  icon: InputSignal<string | null> = input<string | null>(null);

  private readonly colorMap: Record<string, string> = {
    primary: ' bg-primary hover:bg-blue-600 ',
    accent: ' bg-pink-500 hover:bg-pink-600 ',
    warn: ' bg-red-500 hover:bg-red-600 ',
    success: ' bg-green-500 hover:bg-green-600 ',
  };

  private readonly sizeMap: Record<string, string> = {
    xs: '  p-[4px] ',
    sm: '  p-[5px] ',
    md: '  p-[6px] ',
    lg: '  p-[7px]  ',
    xl: '  p-[8px] ',
    '2xl': '  p-[9px]  ',
    full: 'p-[10px] w-full ',
  };

  private readonly roundedMap: Record<string, string> = {
    xs: ' rounded-xs ',
    sm: ' rounded-sm ',
    md: ' rounded-md ',
    lg: ' rounded-lg ',
    xl: ' rounded-xl ',
    '2xl': ' rounded-2xl ',
    full: ' rounded-full ',
  };

  readonly bgClass = computed(() => this.colorMap[this.bgColor()]);
  readonly sizeClass = computed(() => this.sizeMap[this.size()]);
  readonly roundedClass = computed(() => this.roundedMap[this.rounded()]);
}
