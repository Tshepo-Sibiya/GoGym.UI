import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/user/Models/token';
import { GymItem } from '../models/gymItem';
import { GYM_API_ENDPOINTS } from '../Constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class GymItemsService {

  constructor(private http: HttpClient) {

  }


  _getUserGymItemsUrl = environment.baseUrl;

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

    return this.http.post<GymItem[]>(this._getUserGymItemsUrl + GYM_API_ENDPOINTS.GET_GYM_ITEMS_BY_USER_ID, user, { headers });
  }

  deleteGymItem(id: any): Observable<any> {
    const token = JSON.parse(sessionStorage.getItem('AccessToken') ?? '') as Token;
    if (!token) {
      // Handle the error appropriately here, e.g., throw an error or return an empty observable
      throw new Error("AccessToken or UserDetails is missing in session storage.");
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.token}`
    });

    return this.http.delete<GymItem[]>(this._getUserGymItemsUrl + GYM_API_ENDPOINTS.DELETE_GYM_ITEM + '?id=' + id, { headers });
  }

  createGymItem(gymItem: GymItem): Observable<any>{
    const token = JSON.parse(sessionStorage.getItem('AccessToken') ?? '') as Token;
    if (!token) {
      // Handle the error appropriately here, e.g., throw an error or return an empty observable
      throw new Error("AccessToken or UserDetails is missing in session storage.");
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token.token}`
    });
    return this.http.post<GymItem[]>(this._getUserGymItemsUrl + GYM_API_ENDPOINTS.CREATE_GYM_ITEM, gymItem, { headers });
  }
}
