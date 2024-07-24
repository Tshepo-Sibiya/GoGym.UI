import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { GymItemsComponent } from './Components/gym-items/gym-items.component';
import { HitTheGymComponent } from './Components/hit-the-gym/hit-the-gym.component';
import { TrackComponent } from './Components/track/track.component';
import { GoGymRoutingModule } from './go-gym-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddItemComponent,
    GymItemsComponent,
    HitTheGymComponent, 
    TrackComponent
  ],
  imports: [
    CommonModule,
    GoGymRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GoGymModule { }
