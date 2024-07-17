import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from '../../Service/shared-dialog-service.service';

@Component({
  selector: 'app-manu-items',
  templateUrl: './manu-items.component.html',
  styleUrls: ['./manu-items.component.css']
})
export class ManuItemsComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private dialogService: SharedDialogServiceService) { }

  ngOnInit(): void {
  }

  navigate(val: string) {
    this.router.navigate(['/' + val]);
  }

  openDialog(): void {
    const dialogData = {
      message: 'This is a simple dialog!'
    };
    this.dialogService.openDialog(dialogData);
  }

}
