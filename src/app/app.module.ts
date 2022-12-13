import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { PetListItemComponent } from './pets/pet-list/pet-list-item/pet-list-item.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PetIndexComponent } from './pets/pet-index/pet-index.component';
import { PetComponent } from './pets/pet.component';



@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    PetDetailComponent,
    PetListItemComponent,
    NavbarComponent,
    AddPetComponent,
    HomeComponent,
    PetIndexComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
