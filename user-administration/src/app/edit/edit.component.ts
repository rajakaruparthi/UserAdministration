import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CommonService} from '../common.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserModel} from '../user.model';
import {relative} from 'path';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  index: number;
  users = this.commonService.getUsers();
  private editForm: FormGroup;

  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.initForm(this.index);
      }
    );
  }

  initForm(index: number) {
    const user = this.users[index];
    this.editForm = new FormGroup({
      'username': new FormControl(user.username, Validators.maxLength(10)),
      'password': new FormControl(user.password, Validators.required),
      'id': new FormControl(user.id),
      'role': new FormControl(user.role)
    });
  }

  onEditUser(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const role = form.value.role;
    const userObj = new UserModel(form.value.id, username, password, role);
    this.commonService.updateUsers(userObj, this.index);

    this.router.navigate(['/view'])
      .then(
     value => console.log('value' + value)
     ).catch(
       reason => console.log('finally' + reason)
     ).finally(
       () => console.log('finally')
     );
  }
}
