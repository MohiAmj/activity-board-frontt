import { Component } from '@angular/core';
import { BaseCard } from '../../../../_shared/ui/base-card/base-card';
import { BaseText } from '../../../../_shared/ui/base-text/base-text';
import { FormField } from '../../../../_shared/ui/form-field/form-field';
import { BaseButton } from '../../../../_shared/ui/base-button/base-button';

@Component({
  selector: 'app-login-page',
  imports: [BaseCard, BaseText, FormField, BaseButton],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
