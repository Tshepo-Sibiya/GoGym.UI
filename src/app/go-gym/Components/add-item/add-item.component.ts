import { Component, OnInit } from '@angular/core';
import { SharedDialogServiceService } from 'src/app/shared/Service/shared-dialog-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private dialogService: SharedDialogServiceService) { }

  ngOnInit(): void {
  }

  infoDialog(): void {
    const dialogData = {
      message: 'This is a simple dialog!'
    };
    this.dialogService.openDialog(dialogData);
  }

}
