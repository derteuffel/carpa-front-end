import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {UserPayload} from '../../user-details/user-payload';

@Component({
  selector: 'app-user-add-secretaire',
  templateUrl: './user-add-secretaire.component.html',
  styleUrls: ['./user-add-secretaire.component.css']
})
export class UserAddSecretaireComponent implements OnInit {

  secretaireForm: FormGroup;
  userPayload: UserPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.secretaireForm = new FormGroup(
      {
        email: new FormControl(),
        fullname: new FormControl(),
        fonction: new FormControl(),
        matricule: new FormControl(),
        dateNaissance: new  FormControl()
      }
    );

    this.userPayload = {
      email: '',
      fullname: '',
      fonction: '',
      matricule: '',
      dateNaissance: new Date()
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userPayload.fullname = this.secretaireForm.get('fullname').value;
    this.userPayload.email = this.secretaireForm.get('email').value;
    this.userPayload.dateNaissance = this.secretaireForm.get('dateNaissance').value;
    this.userPayload.fonction = this.secretaireForm.get('fonction').value;
    this.userPayload.matricule = this.secretaireForm.get('matricule').value;

    this.authService.registerExpert(this.userPayload).subscribe(
      data => {
        if (data){
          console.log('Secretaire saved successfully!!!');
          this.router.navigateByUrl('/users/lists');
        }else {
          console.log('Secretaire saved failed');
        }
      }
    );
  }

}
