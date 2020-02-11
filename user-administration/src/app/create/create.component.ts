import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserModel} from '../user.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private usermodel: UserModel;
  constructor(private commonService: CommonService, private router: Router) { }
  ngOnInit() {
  }
  onCreate(form: NgForm) {
    const username = form.value.username;
    const id = form.value.id;
    const password = form.value.password;
    const role = form.value.role;
    this.usermodel = new UserModel(id, username, password, role) ;
    this.commonService.saveUsers(this.usermodel);
    this.router.navigate(['/view']);
  }
}
