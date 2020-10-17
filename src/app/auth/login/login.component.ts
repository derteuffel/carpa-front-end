import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private mode = 0;
  form: any = {};
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService, private router: Router, private tokenStorage: TokenStorageService) {

  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigateByUrl('/courriers/lists');
    }
  }

  onSubmit() {

    this.authService.login(this.form).subscribe(data => {
        console.log('login success');
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(data.accessToken);
        this.router.navigateByUrl('/courriers/lists');

      }, error  =>  {
        this.isLoginFailed = true;
        this.isLoggedIn = false;
        console.log('Login failed');
    });
  }

}
