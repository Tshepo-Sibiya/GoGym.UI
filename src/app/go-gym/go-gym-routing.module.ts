import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { GymItemsComponent } from './Components/gym-items/gym-items.component';
import { HitTheGymComponent } from './Components/hit-the-gym/hit-the-gym.component';
import { TrackComponent } from './Components/track/track.component';


const routes: Routes = [
    {
        path: '',
        component: GymItemsComponent
    },
    {
        path: 'add-item',
        component: AddItemComponent
    },
    {
        path: 'gym-items',
        component: GymItemsComponent
    },
    {
        path: 'hit-the-gym',
        component: HitTheGymComponent
    },
    {
        path: 'track',
        component: TrackComponent
    }




];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoGymRoutingModule { }
