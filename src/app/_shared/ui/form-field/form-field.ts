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
  classDesignForInput = '';

  ngAfterViewInit() {
    const input = this.fieldset?.nativeElement.querySelector('input');
    if (input) {
      input.classList.add(
        'bg-white',
        'rounded-full',
        'border-none',
        'outline-none',
      );
    }

    const select = this.fieldset?.nativeElement.querySelector('select');
    if (select) {
      select.classList.add(
        'bg-white',
        'rounded-full',
        'border-none',
        'outline-none',
        'h-18',
        'w-full',
      );
    }

    const textarea = this.fieldset?.nativeElement.querySelector('textarea');
    if (textarea) {
      textarea.classList.add(
        'bg-white',
        'rounded-full',
        'border-none',
        'outline-none',
      );
    }
  }
}
