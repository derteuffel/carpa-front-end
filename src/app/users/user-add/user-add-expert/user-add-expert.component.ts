import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserPayload} from '../../user-details/user-payload';
import {AuthService} from '../../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add-expert',
  templateUrl: './user-add-expert.component.html',
  styleUrls: ['./user-add-expert.component.css']
})
export class UserAddExpertComponent implements OnInit {

  expertForm: FormGroup;
  userPayload: UserPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.expertForm = new FormGroup(
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
    this.userPayload.fullname = this.expertForm.get('fullname').value;
    this.userPayload.email = this.expertForm.get('email').value;
    this.userPayload.dateNaissance = this.expertForm.get('dateNaissance').value;
    this.userPayload.fonction = this.expertForm.get('fonction').value;
    this.userPayload.matricule = this.expertForm.get('matricule').value;

    this.authService.registerExpert(this.userPayload).subscribe(
      data => {
        if (data){
        console.log('Expert saved successfully!!!');
        this.router.navigateByUrl('/users/lists');
        }else {
          console.log('Expert saved failed');
        }
      }
    );
  }


}
