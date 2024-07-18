import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManuItemsComponent } from './Components/manu-items/manu-items.component';
import { ProfileCardComponent } from './Components/profile-card/profile-card.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedDialogComponent } from './Components/shared-dialog/shared-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedDialogServiceService } from './Service/shared-dialog-service.service';
import { MatCommonModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ManuItemsComponent,
    ProfileCardComponent,
    SharedDialogComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatCommonModule,
    ReactiveFormsModule
  ],
  providers: [SharedDialogServiceService],
  exports: [
    ManuItemsComponent,
    ProfileCardComponent,
    SharedDialogComponent

  ], 
  entryComponents: [SharedDialogComponent]
})
export class SharedModule { }
