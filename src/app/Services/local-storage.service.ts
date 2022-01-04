import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getAllUsers() {
    const users = localStorage.getItem('users') || []
    return users;
  }
  getUser(username: string) {
    const users = localStorage.getItem('users') || []
    console.log(users)
    return Array.from(users).find((user: IUser) => user && user.username.toLowerCase() === username.toLowerCase());
  }
}
