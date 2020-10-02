import { Component, OnInit } from '@angular/core';
import {UserDetail} from '../user-details/user-detail';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {UserPayload} from '../user-details/user-payload';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: UserDetail;
  userForm: FormGroup;
  dateNaissance: Date;
  userPayload: UserPayload;
  permalink: number;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private userService: UserService, private router: Router) {
    this.userPayload = {
      email: '',
      fullname: '',
      dateNaissance: new Date(),
      matricule: '',
      fonction: ''
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.permalink = params['id'];
    });

    this.userService.getUser(this.permalink).subscribe((data: UserDetail) => {
      if (data){
        console.log('User fetched successfully');
        this.user = data;
      }else {
        console.log('User fetched failled');
      }
    });
  }

  onSubmit(){

    this.userPayload.fonction = this.user.fonction;
    this.userPayload.matricule = this.user.matricule;
    this.userPayload.dateNaissance = this.dateNaissance;
    this.userPayload.fullname = this.user.fullname;
    this.userPayload.email = this.user.email;

    this.authService.updateUser(this.userPayload, this.permalink).subscribe(
      data => {
        if (data){
          console.log('User updated successfully');
          console.log(data);
          this.router.navigateByUrl('/users/user-details/' + this.permalink);
        }else {
          console.log('User updated failed');
        }
      }
    );
  }




}
