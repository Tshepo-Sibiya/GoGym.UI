import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GymItemsService } from 'src/app/go-gym/Services/gym-items.service';

@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  isLoading: boolean = false;
  isSuccess: boolean = false;
  isComplete: boolean = false;
  message: string = 'Are you sure you want to delete this item?';
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private gymItemsService: GymItemsService) { }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.isLoading = true;
    // Call the API endpoint with the provided data

    this.gymItemsService.deleteGymItem(this.data.id).subscribe(
      {
        next: (value) => {
          this.isLoading = false;
          this.isSuccess = true;
          this.isComplete = true;
          this.message = 'Gym item successfully deleted.';
          // this.dialogRef.close(true);
        },
        error: (error) => {
          this.message = 'Failed to delete gym item, please try again.';
          this.isLoading = false;
          this.isSuccess = false;
          this.isComplete = true;

        }

      });;
    
    // this.http.post(this.data.apiEndpoint, this.data.payload).subscribe(
    //   {
    //     next: (value) => {
    //       this.isLoading = false;
    //       this.dialogRef.close(true);
    //     },
    //     error: (error) => {
    //       this.isLoading = false;
    //       console.error(error);
    //       this.dialogRef.close(false);
    //     }

    //   });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
