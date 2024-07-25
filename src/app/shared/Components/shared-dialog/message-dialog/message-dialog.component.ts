import { Component, Inject, OnInit } from '@angular/core';
import { SharedDialogComponent } from '../shared-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  
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
