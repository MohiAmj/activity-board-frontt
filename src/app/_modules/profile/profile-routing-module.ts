import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyStateProfilePage } from './_pages/empty-state-profile-page/empty-state-profile-page';
import { ProfilePage } from './_pages/profile-page/profile-page';

const routes: Routes = [
  { path: 'empty-profile', component: EmptyStateProfilePage },
  { path: 'profile-page', component: ProfilePage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
