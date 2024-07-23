import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GymItem } from '../models/GymItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from 'src/app/user/Models/user.details';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/user/Models/token';

@Injectable({
  providedIn: 'root'
})
export class GymItemsService {

  constructor(private http: HttpClient) {

  }


  _getUserGymItemsUrl = environment.baseUrl + '/GymItem/GetGymItemsByUserId';

  getUserGymItems(): Observable<GymItem[]> {
    const token = JSON.parse(sessionStorage.getItem('AccessToken') ?? '') as Token;
    const userDetails = sessionStorage.getItem('UserDetails');

    if (!token || !userDetails) {
      // Handle the error appropriately here, e.g., throw an error or return an empty observable
      throw new Error("AccessToken or UserDetails is missing in session storage.");
    }
    const user = JSON.parse(userDetails);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.token}`
    });

    return this.http.post<GymItem[]>(this._getUserGymItemsUrl, user, { headers });
  }
}
