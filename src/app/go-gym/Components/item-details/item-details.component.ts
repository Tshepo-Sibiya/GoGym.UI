import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from 'src/app/shared/Service/shared-dialog-service.service';
import { GymItemsService } from '../../Services/gym-items.service';
import { MessageDialogComponent } from 'src/app/shared/Components/shared-dialog/message-dialog/message-dialog.component';
import { UserDetails } from 'src/app/user/Models/user.details';
import { GymItem } from '../../models/gymItem';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  isLoading: boolean = false;
  receivedData!: GymItem;
  public itemDetailsForm!: FormGroup;
  constructor(    private dialogService: SharedDialogServiceService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private gymItemsService: GymItemsService

  ) { }

  ngOnInit(): void {
    this.receivedData = history.state.itemDetails;
    console.log(this.receivedData);
    if(this.receivedData != null) {
      this.itemDetailsForm = this.fb.group({

        name: [this.receivedData?.name ?? '', [Validators.required]],
        description: [this.receivedData?.description ?? ''],
        isRequired: [this.receivedData?.isRequired ?? '']
  
      });
    } else {
      this.router.navigate(['/go-gym/gym-items']);
    }
 
  }

  update() {
    this.isLoading = true;
    let newGymItem: GymItem = {
      userId: (JSON.parse(sessionStorage.getItem('UserDetails') ?? '') as UserDetails).userId ?? '',
      name: this.itemDetailsForm.get('name')?.value,
      description: this.itemDetailsForm.get('description')?.value,
      isRequired: this.itemDetailsForm.get('isRequired')?.value,
    };
    console.log(newGymItem);
    this.gymItemsService.createGymItem(newGymItem).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.openConfirmDialog('Gym item successfully created.', true);
      },
      error: (error) => {
        this.isLoading = false;
        this.openConfirmDialog('Failed to create gym item.', false);
      }
    });
  }

  openConfirmDialog(message: string, isSuccess: boolean ) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '300px',
      data: {
        
        title: 'Add New Item',
        message: message,
        isSuccess: isSuccess
      }
    });

  }

  
  info() {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '300px',
      data: {

        title: 'Information',
        message: 'This flag that shows whether an item is required or not.'
      }
    });

  }

}
