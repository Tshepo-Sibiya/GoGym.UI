import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SharedDialogServiceService } from '../../Service/shared-dialog-service.service';
import { AuthService } from 'src/app/user/Services/auth.service';
import { UserDetails } from 'src/app/user/Models/user.details';

@Component({
  selector: 'app-manu-items',
  templateUrl: './manu-items.component.html',
  styleUrls: ['./manu-items.component.css']
})
export class ManuItemsComponent implements OnInit {

  ProfileName!: String;
  userDetails!: UserDetails;
  constructor(private router: Router, private dialogService: SharedDialogServiceService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName;
    });
    
  }

  navigate(val: string) {
    this.router.navigate(['/' + val]);
  }

  Logout(){
    this.authService.logout();
  }

  openDialog(): void {
    const dialogData = {
      message: 'This is a simple dialog!'
    };
    this.dialogService.openDialog(dialogData);
  }

}
