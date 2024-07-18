import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  // Method to set data in sessionStorage
  setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Method to get data from sessionStorage and parse it
  getItem<T>(key: string): T | null {
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }

  // Method to clear all session storage data
  clearSessionStorage() {
    sessionStorage.clear();
  }
}
