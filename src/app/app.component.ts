import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from './shared/Service/shared-dialog-service.service';
import { UserDetails } from './user/Models/user.details';
import { StorageService } from './shared/Service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Worker.Global.UI';
  ProfileName: String = '';
  userDetails!: UserDetails;
  constructor(private router: Router, private dialogService: SharedDialogServiceService, private storageService: StorageService) {

  }

  ngOnInit(): void {
    this.userDetails = (this.storageService.getItem<string>('UserDetails') as UserDetails);
    this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName;
  }

  Logout() {

    this.storageService.clearSessionStorage();
    this.router.navigate(['/user/login']);

  }

  goGym(val: string) { }


  openDialog(): void {

    window.alert('Hello');
    // this.dialogService.openDialog({
    //   title: 'Dialog Title',
    //   message: 'This is a message from the dialog!'
    // });
  }


}
