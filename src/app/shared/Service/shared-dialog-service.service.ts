import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedDialogComponent } from '../Components/shared-dialog/shared-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class SharedDialogServiceService {


  constructor(private dialog: MatDialog) { }

  openDialog(data: any): void {
    this.dialog.open(SharedDialogComponent, {
      data: data
    });
  }
}
