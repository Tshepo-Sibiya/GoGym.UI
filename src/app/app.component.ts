import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from './shared/Service/shared-dialog-service.service';
import { UserDetails } from './user/Models/user.details';
import { StorageService } from './shared/Service/storage.service';
import { AuthService } from './user/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Worker.Global.UI';
  ProfileName!: String;
  userDetails!: UserDetails;
  isAuthenticated!: boolean;
  greetingMessage!: string;
  constructor(private router: Router, private dialogService: SharedDialogServiceService, private storageService: StorageService, private authService: AuthService) {

  }

  ngOnInit(): void {
    // this.userDetails = (this.storageService.getItem<string>('UserDetails') as UserDetails);
    // this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName;
    // if(this.authService.getToken()) {
    //   this.ProfileName = this.authService.getUserDetails().firstName ?? '';
    // }
    this.setGreetingMessage();

    this.authService.isAuthenticated().subscribe(isAuth => {
      this.isAuthenticated = isAuth;

      if(this.isAuthenticated) {
        this.authService.getUserDetails().subscribe(data => {
          this.userDetails = data;
          console.log(this.userDetails);
          this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName + ' ' + this.userDetails.lastName;
        });
      }
    });

    // this.isAuthenticated = this.authService.getToken() ?? '';
    // if (this.isAuthenticated) {
    //   this.authService.getUserDetails().subscribe(data => {
    //     this.userDetails = data;
    //     console.log(this.userDetails);
    //     this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName;
    //   });

    // }

  }

  setGreetingMessage(): void {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greetingMessage = 'Good morning';
    } else if (currentHour < 18) {
      this.greetingMessage = 'Good afternoon';
    } else {
      this.greetingMessage = 'Good evening';
    }
  }

  Logout() {
    this.authService.logout();
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
