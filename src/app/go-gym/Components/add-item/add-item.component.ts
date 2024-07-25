import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from 'src/app/shared/Service/shared-dialog-service.service';
import { GymItemsService } from '../../Services/gym-items.service';
import { GymItem } from '../../models/gymItem';
import { ConfirmDialogComponent } from 'src/app/shared/Components/shared-dialog/confirm-dialog/confirm-dialog.component';
import { GYM_API_ENDPOINTS } from '../../Constants/api-endpoints';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/Components/shared-dialog/message-dialog/message-dialog.component';
import { UserDetails } from 'src/app/user/Models/user.details';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  isLoading: boolean = false;
  public addItemForm!: FormGroup;
  constructor(    private dialogService: SharedDialogServiceService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private gymItemsService: GymItemsService,

  ) { }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({

      name: ['', [Validators.required]],
      description: [''],
      isRequired: [false]


    });
  }

  submit() {
    this.isLoading = true;
    let newGymItem: GymItem = {
      userId: (JSON.parse(sessionStorage.getItem('UserDetails') ?? '') as UserDetails).userId ?? '',
      name: this.addItemForm.get('name')?.value,
      description: this.addItemForm.get('description')?.value,
      isRequired: this.addItemForm.get('isRequired')?.value,
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

  infoDialog(): void {
    const dialogData = {
      message: 'This is a simple dialog!'
    };
    this.dialogService.openDialog(dialogData);
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

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {

    //     console.log('Confirmed');
    //   } else {
    //     console.log('Cancelled');
    //   }
    //   this._getGymItems();

    // });
  }

}
