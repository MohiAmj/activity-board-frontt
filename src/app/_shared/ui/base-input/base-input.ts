import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './base-input.html',
  styleUrl: './base-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInput),
      multi: true,
    },
  ],
})
export class BaseInput implements ControlValueAccessor {
  // Inputs for visual and behavioral configuration
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() name = '';
  @Input() disabled = false;
  @Input() showRequired = false;
  @Input() height = 'h-12';
  @Input() width = 'w-96';
  @Input() formControlName = '';
  value = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: string) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  get computedId(): string {
    return this.name || `input-${Math.random().toString(36).substring(2, 8)}`;
  }

  // ControlValueAccessor Methods
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
