import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymItemsService } from '../../Services/gym-items.service';
import { GymItem } from '../../models/gymItem';
import { MatDialog } from '@angular/material/dialog';
import { API_ENDPOINTS } from '../../Constants/api-endpoints';
import { ConfirmDialogComponent } from 'src/app/shared/Components/shared-dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-gym-items',
  templateUrl: './gym-items.component.html',
  styleUrls: ['./gym-items.component.css']
})
export class GymItemsComponent implements OnInit {

  constructor(private router: Router, private gymItemsService: GymItemsService,public dialog: MatDialog,) { }
  gymItems: GymItem[] | undefined;
  isLoading: boolean = false;

  ngOnInit(): void {
    this._getGymItems();
  }

  _getGymItems() {

    this.isLoading = true;
    this.gymItemsService.getUserGymItems().subscribe({
      next: (gymItemsResponse) => {
        this.gymItems = gymItemsResponse;
        this.isLoading = false;
        console.log(gymItemsResponse);
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error.error.message);
      }
    });

  }

  navigate(val: string) {
    this.router.navigate(['/' + val]);
  }

  getRequiredValue(val: any): string {
    if (val == true) {
      return 'YES';
    } else {
      return 'NO';
    }
  }


  openConfirmDialog(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Delete Item',
        message: 'Are you sure you want to delete this item?',
        apiEndpoint: API_ENDPOINTS.DELETE_GYM_ITEM,
        id: id   // Example payload
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._getGymItems();
        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }
 
    });
  }


}
