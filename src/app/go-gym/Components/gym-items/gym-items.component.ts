import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymItemsService } from '../../Services/gym-items.service';
import { GymItem } from '../../models/GymItem';

@Component({
  selector: 'app-gym-items',
  templateUrl: './gym-items.component.html',
  styleUrls: ['./gym-items.component.css']
})
export class GymItemsComponent implements OnInit {

  constructor(private router: Router, private gymItemsService: GymItemsService,) { }
  gymItems: GymItem[] | undefined;
  isLoading: boolean = false;

  ngOnInit(): void {
    this._getGymItems();
  }

  _getGymItems() {

    this.isLoading = true;
    this.gymItemsService.getUserGymItems().subscribe({
      next: (gymItemsResponse) => {
        this.gymItems = gymItemsResponse;
        this.isLoading = false;
        console.log(gymItemsResponse);
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error.error.message);
      }
    });

  }

  getRequiredValue(val: any): string {
    if (val == true) {
      return 'YES';
    } else {
      return 'NO';
    }

  }


}
