import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {UserModel} from '../user.model';
import {Router, RouterEvent, RouterLink} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router) { }

  userObjects: UserModel[];
  ngOnInit() {
  }

  viewUsers() {
    this.userObjects = this.commonService.getUsers();
    return this.userObjects;
  }

  onEditUser(index: number) {
    this.router.navigate(['/edit/' + index]);
  }
}
