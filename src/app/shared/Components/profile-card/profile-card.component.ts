import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/user/Models/user.details';
import { StorageService } from '../../Service/storage.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  ProfileName: String = '';
  constructor(private storageService: StorageService) {

    // const userDetails = (this.storageService.getItem<string>('UserDetails') as UserDetails);
    // this.ProfileName = userDetails.title + ' ' + userDetails.firstName;
   }


  ngOnInit(): void {

  }

}
