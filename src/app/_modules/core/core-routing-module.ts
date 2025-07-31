import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './_pages/login-page/login-page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
