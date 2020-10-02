import { Component, OnInit } from '@angular/core';
import {UserDetail} from './user-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: UserDetail;
  permalink: number;

  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
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

  compte(){

  }

}
