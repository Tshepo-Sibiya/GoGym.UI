import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from './shared/Service/shared-dialog-service.service';
import { UserDetails } from './user/Models/user.details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Worker.Global.UI';
  ProfileName: String = '';
  constructor(private router: Router,private dialogService: SharedDialogServiceService) { 
   
  }



  ngOnInit(): void {
    const userDetails = JSON.parse(sessionStorage.getItem('UserDetails') ?? '') as UserDetails;
    this.ProfileName = userDetails.title + ' ' + userDetails.firstName;
  }
  
  Logout() {

    sessionStorage.clear();
    this.router.navigate(['/user/login']);

  }

  goGym(val: string){}


  openDialog(): void {

    window.alert('Hello');
    // this.dialogService.openDialog({
    //   title: 'Dialog Title',
    //   message: 'This is a message from the dialog!'
    // });
  }

  
}
