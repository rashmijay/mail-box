import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [] as Array<IUser>
  }
  getUserByUsername(username: string) {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return Array.from(users).find((user: IUser) => user && user.username.toLowerCase() === username.toLowerCase()) as IUser;
  }
  getUserById(id: string) {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return Array.from(users).find((user: IUser) => user && user.id.toLowerCase() === id.toLowerCase()) as IUser;
  }
}
