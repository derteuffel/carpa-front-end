import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserPayload} from '../../user-details/user-payload';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add-coordonateur',
  templateUrl: './user-add-coordonateur.component.html',
  styleUrls: ['./user-add-coordonateur.component.css']
})
export class UserAddCoordonateurComponent implements OnInit {

  coordonateurForm: FormGroup;
  userPayload: UserPayload;
  rolesList: string[];

  constructor(private authService: AuthService, private router: Router) {
    this.coordonateurForm = new FormGroup(
      {
        email: new FormControl(),
        fullname: new FormControl(),
        fonction: new FormControl(),
        matricule: new FormControl(),
        dateNaissance: new  FormControl(),
        password: new FormControl(),
        username: new FormControl(),
        roles: new FormControl()
      }
    );

    this.userPayload = {
      email: '',
      fullname: '',
      fonction: '',
      matricule: '',
      dateNaissance: new Date(),
      password: '',
      roles: [],
      username: ''
    };
  }

  ngOnInit(): void {
    this.rolesList = ['root', 'coordonateur', 'expert', 'secretaire'];
  }

  onSubmit() {
    this.userPayload.fullname = this.coordonateurForm.get('fullname').value;
    this.userPayload.email = this.coordonateurForm.get('email').value;
    this.userPayload.dateNaissance = this.coordonateurForm.get('dateNaissance').value;
    this.userPayload.fonction = this.coordonateurForm.get('fonction').value;
    this.userPayload.matricule = this.coordonateurForm.get('matricule').value;
    this.userPayload.password = this.coordonateurForm.get('password').value;
    this.userPayload.username = this.coordonateurForm.get('username').value;
    this.userPayload.roles = this.coordonateurForm.get('roles').value;

    this.authService.registerCoordonateur(this.userPayload).subscribe(
      data => {
        if (data){
          console.log('Coordonateur saved successfully!!!');
          this.router.navigateByUrl('/users/lists');
        }else {
          console.log('Coordonateur saved failed');
        }
      }
    );
  }

}
