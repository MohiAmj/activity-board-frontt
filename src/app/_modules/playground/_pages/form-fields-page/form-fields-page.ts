import { Component } from '@angular/core';
import { FormField } from '../../../../_shared/ui/form-field/form-field';

@Component({
  selector: 'app-form-fields-page',
  imports: [FormField],
  templateUrl: './form-fields-page.html',
  standalone: true,
  styleUrl: './form-fields-page.css',
})
export class FormFieldsPage {}
