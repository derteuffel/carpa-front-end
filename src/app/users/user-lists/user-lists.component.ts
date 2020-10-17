import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserDetail} from '../user-details/user-detail';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  page = 1;
  searchedKeyword: string;

  users: Observable<UserDetail[]>;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.users = this.userService.getAllUsers();
    console.log(this.users);
  }

  handlePageChange(event) {
    this.page = event;
  }

  delete(id: number){
    console.log('je suis dedans');
    this.authService.deleteUser(id).subscribe(
      data => {
        if (data){
          console.log('User delete successfully');
          window.location.reload();
        }else {
          console.log('User delete failed');
        }
      }
    );
    console.log('je fonctionne bien');
  }

}
