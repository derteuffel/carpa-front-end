import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginPayload} from './login-payload';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.loginPayload = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginPayload.email = this.loginForm.get('email').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        if (data.token){
          localStorage.setItem('token', data.token);
          this.router.navigateByUrl('/courriers/lists');
        }

      } else {
        console.log('Login failed');
      }
    });
  }

}
