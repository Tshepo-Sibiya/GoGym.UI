import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuItemsComponent } from './Components/manu-items/manu-items.component';



@NgModule({
  declarations: [
    ManuItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ManuItemsComponent,
    // Other shared components, directives, pipes
  ]
})
export class SharedModule { }
