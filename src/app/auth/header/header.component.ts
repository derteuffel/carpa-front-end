import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Role} from '../../users/role';
import {UserDetail} from '../../users/user-details/user-detail';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;


  currentUser: any;
  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.checkAuth();
    console.log(this.isAuthenticated);
    this.currentUser = this.tokenStorage.getUser();
  }


  logout() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/login');
  }

  checkAuth(){
    if (this.tokenStorage.getToken() != null){
      this.isAuthenticated = true;
    }else {
      this.isAuthenticated = false;
    }
  }



}
