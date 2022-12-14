import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AuthGuard } from './auth/auth.guard';
import { ConfirmBeforeLeavingGuard } from './auth/confirm-before-leaving.guard';

import { HomeComponent } from './home/home.component';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetIndexComponent } from './pets/pet-index/pet-index.component';
import { PetComponent } from './pets/pet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'pet',
    component: PetComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'index',
        component: PetIndexComponent,
        children: [{ path: ':id', component: PetDetailComponent }],
      },
      {
        path: 'add',
        component: AddPetComponent,
        canDeactivate: [ConfirmBeforeLeavingGuard],
      },
      { path: '', pathMatch: 'full', redirectTo: 'index' },
      { path: '**', redirectTo: 'index' },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
