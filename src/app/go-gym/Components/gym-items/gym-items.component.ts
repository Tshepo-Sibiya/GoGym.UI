import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymItemsService } from '../../Services/gym-items.service';
import { GymItem } from '../../models/gymItem';
import { MatDialog } from '@angular/material/dialog';
import { GYM_API_ENDPOINTS } from '../../Constants/api-endpoints';
import { ConfirmDialogComponent } from 'src/app/shared/Components/shared-dialog/confirm-dialog/confirm-dialog.component';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gym-items',
  templateUrl: './gym-items.component.html',
  styleUrls: ['./gym-items.component.css']
})
export class GymItemsComponent implements OnInit {

  public gymItemsForm!: FormGroup;
  constructor(
    private router: Router,
    private gymItemsService: GymItemsService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }
  gymItems!: GymItem[];
  isLoading: boolean = false;

  ngOnInit(): void {
    this._getGymItems();
    this.gymItemsForm = this.fb.group({

      selectAll: [false],
      items: this.fb.array([])

    });

    this.gymItemsForm.get('selectAll')!.valueChanges.subscribe((value) => {
      this.setAllCheckboxes(value);
    });

    this.gymItemsForm.get('items')!.valueChanges.subscribe(() => {
      this.updateSelectAllCheckbox();
    });
  }

  _getGymItems() {

    this.isLoading = true;
    this.gymItemsService.getUserGymItems().subscribe({
      next: (gymItemsResponse) => {
        this.gymItems = gymItemsResponse;
        this.isLoading = false;
        console.log(gymItemsResponse);
        this.initializeCheckboxes();
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error.error.message);
      }
    });

  }

  checkAllItems(value: any) {

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

  initializeCheckboxes() {
    const formArray = this.gymItemsForm.get('items') as FormArray;
    formArray.clear(); // Clear existing checkboxes
    this.gymItems.forEach(() => formArray.push(new FormControl(false)));
  }


  addCheckboxes() {
    const formArray = this.gymItemsForm.get('items') as FormArray;
    this.gymItems.forEach(() => formArray.push(new FormControl(false)));
  }

  setAllCheckboxes(value: boolean) {
    const formArray = this.gymItemsForm.get('items') as FormArray;
    formArray.controls.forEach(control => control.setValue(value));
  }

  updateSelectAllCheckbox() {
    const formArray = this.gymItemsForm.get('items') as FormArray;
    const allSelected = formArray.controls.every(control => control.value);
    this.gymItemsForm.get('selectAll')!.setValue(allSelected, { emitEvent: false });
  }

  get itemControls(): FormControl[] {
    const formArray = this.gymItemsForm.get('items') as FormArray;
    return formArray.controls as FormControl[];
  }

  deleteSelected() { }
  openConfirmDialog(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Delete Item',
        message: 'Are you sure you want to delete this item?',
        apiEndpoint: GYM_API_ENDPOINTS.DELETE_GYM_ITEM,
        id: id   // Example payload
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }
      this._getGymItems();

    });
  }


}
