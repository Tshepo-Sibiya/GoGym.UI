import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuItemsComponent } from './Components/manu-items/manu-items.component';
import { ProfileCardComponent } from './Components/profile-card/profile-card.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    ManuItemsComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ManuItemsComponent,
    ProfileCardComponent
    // Other shared components, directives, pipes
  ]
})
export class SharedModule { }
