import { Component } from '@angular/core';
import {UserDetail} from './users/user-details/user-detail';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {Role} from './users/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spring-frontend-app';


  constructor(private authService: AuthService, private router: Router){

  }
}
