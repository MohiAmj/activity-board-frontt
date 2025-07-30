import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.html',
  standalone: true,
  styleUrl: './form-field.css',
})
export class FormField implements AfterViewInit {
  @ViewChild('fieldset') fieldset: ElementRef | undefined;
  classDesign = [
    'bg-white/10',
    'backdrop-blur-sm',
    'border-none',
    'outline-none',
    'hover:bg-white/15',
    'focus:bg-white/20',
    'indent-5',
    'text-white',
    'py-2',
    'hover:shadow-md',
    'hover:shadow-black',
    'transition-all',
  ];

  ngAfterViewInit() {
    const input = this.fieldset?.nativeElement.querySelector('input');
    if (input) {
      input.classList.add(...this.classDesign, 'rounded-full');
    }

    const select = this.fieldset?.nativeElement.querySelector('select');
    if (select) {
      select.classList.add(...this.classDesign, 'rounded-full');
    }

    const textarea = this.fieldset?.nativeElement.querySelector('textarea');
    if (textarea) {
      textarea.classList.add(...this.classDesign, 'rounded-lg');
    }
  }
}
