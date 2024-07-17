import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.css'],

})
export class SharedDialogComponent implements OnInit {

  title = 'Check Your Items';

  constructor(
    public dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA,) public data: any,
  
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
