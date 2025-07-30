import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldsPage } from './_pages/form-fields-page/form-fields-page';

const routes: Routes = [
  { path: '', redirectTo: 'form-field', pathMatch: 'full' },
  { path: 'form-field', component: FormFieldsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
