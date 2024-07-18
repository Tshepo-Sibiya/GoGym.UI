import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/user/Models/user.details';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  ProfileName: String = '';
  constructor() {


   }


  ngOnInit(): void {
    const userDetails = JSON.parse(sessionStorage.getItem('UserDetails') ?? '') as UserDetails;
    this.ProfileName = userDetails.title + ' ' + userDetails.firstName;
  }

}
