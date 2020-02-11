import { Injectable } from '@angular/core';
import {UserModel} from './user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  usersChanged = new Subject<UserModel[]>();
  user1 = new UserModel('1', 'raja', 'password', 'admin');
  user2 = new UserModel('2', 'prathyusha', 'password', 'admin');

  userObjects: UserModel[] = [this.user1, this.user2];

  constructor() { }

  saveUsers(userObject: UserModel) {
    this.userObjects.push(userObject);
    this.usersChanged.next(this.userObjects.slice());
  }

  getUsers(): UserModel[] {
    return this.userObjects.slice();
  }

  updateUsers(userObj: UserModel, index: number) {
    this.userObjects[index] = userObj;
    this.usersChanged.next(this.userObjects.slice());
    return this.userObjects.slice();
  }
}
