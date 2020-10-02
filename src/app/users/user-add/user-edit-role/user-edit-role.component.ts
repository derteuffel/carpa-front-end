import { Component, OnInit } from '@angular/core';
import {UserDetail} from '../../user-details/user-detail';
import {AuthService} from '../../../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-edit-role',
  templateUrl: './user-edit-role.component.html',
  styleUrls: ['./user-edit-role.component.css']
})
export class UserEditRoleComponent implements OnInit {

  userDetail: UserDetail;
  permalink: number;
  name: string;
  roles: string[];

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.permalink = params['id'];
    });

    this.userService.getUser(this.permalink).subscribe((data: UserDetail) => {
      if (data){
        console.log('User fetched successfully');
        this.userDetail = data;
        console.log(this.userDetail);
      }else {
        console.log('User fetched failled');
      }
    });

    this.roles = ['ROLE_EXPERT', 'ROLE_ROOT', 'ROLE_SECRETAIRE', 'ROLE_COORDONATEUR'];
  }

  onSubmit(){
    console.log(this.name);
    this.userService.changeRoles(this.userDetail.id, this.name).subscribe(
      data => {
        if (data){
          console.log('User role change Successfully');
          this.route.navigateByUrl('/users/user-details/' + this.userDetail.id);
        }else {
          console.log('User role change failed');
        }
      }
    );
  }

}
