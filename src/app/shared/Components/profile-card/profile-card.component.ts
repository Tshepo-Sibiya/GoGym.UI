import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/user/Models/user.details';
import { StorageService } from '../../Service/storage.service';
import { AuthService } from 'src/app/user/Services/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  ProfileName!: String;
  userDetails!: UserDetails;
  constructor(private storageService: StorageService, private authService: AuthService) {

    // const userDetails = (this.storageService.getItem<string>('UserDetails') as UserDetails);
    // this.ProfileName = userDetails.title + ' ' + userDetails.firstName;
   }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      this.ProfileName = this.userDetails.title + ' ' + this.userDetails.firstName + ' ' + this.userDetails.lastName;
    });
    
  }

}
