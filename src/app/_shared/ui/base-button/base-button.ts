import { Component, computed, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.html',
  styleUrl: './base-button.css',
  standalone: true,
})
export class BaseButton {
  label: InputSignal<string> = input<string>('Base Button');
  bgColor: InputSignal<'primary' | 'accent' | 'warn' | 'success'> = input<
    'primary' | 'accent' | 'warn' | 'success'
  >('primary');
  disabled: InputSignal<boolean> = input<boolean>(false);
  size: InputSignal<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'> = input<
    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  >('lg');

  rounded: InputSignal<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'> =
    input<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>('lg');

  private readonly colorMap: Record<string, string> = {
    primary: ' bg-primary hover:bg-blue-600 ',
    accent: ' bg-pink-500 hover:bg-pink-600 ',
    warn: ' bg-red-500 hover:bg-red-600 ',
    success: ' bg-green-500 hover:bg-green-600 ',
  };

  private readonly sizeMap: Record<string, string> = {
    xs: ' w-20 h-6 ',
    sm: ' w-28 h-8 ',
    md: ' w-36 h-10 ',
    lg: ' w-44 h-12 ',
    xl: ' w-52 h-14 ',
    '2xl': ' w-60 h-16 ',
    full: ' w-full h-full ',
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
