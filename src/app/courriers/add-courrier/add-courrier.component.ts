import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CourrierPayload} from '../courrier-payload';
import {AuthService} from '../../auth.service';
import {CourrierService} from '../../courrier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-courrier',
  templateUrl: './add-courrier.component.html',
  styleUrls: ['./add-courrier.component.css']
})
export class AddCourrierComponent implements OnInit {

  courrierForm: FormGroup;
  courrierPayload: CourrierPayload;

  constructor(private authService: AuthService, private courrierService: CourrierService, private router: Router) {
    this.courrierForm = new FormGroup(
      {
        senderName: new FormControl(),
        receiverName: new  FormControl(),
        objet: new FormControl(),
        referenceNumber: new FormControl(),
        typeCourrier: new FormControl(),
        senderDate: new FormControl(),
        receiverDate: new FormControl()
      }
    );

    this.courrierPayload = {
      senderName: '',
      senderDate: new Date(),
      receiverDate: new  Date(),
      receiverName: '',
      objet: '',
      referenceNumber: '',
      typeCourrier: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.courrierPayload.typeCourrier = this.courrierForm.get('typeCourrier').value;
    this.courrierPayload.referenceNumber = this.courrierForm.get('referenceNumber').value;
    this.courrierPayload.receiverName = this.courrierForm.get('receiverName').value;
    this.courrierPayload.receiverDate = this.courrierForm.get('receiverDate').value;
    this.courrierPayload.senderDate = this.courrierForm.get('senderDate').value;
    this.courrierPayload.senderName = this.courrierForm.get('senderName').value;
    this.courrierPayload.objet = this.courrierForm.get('objet').value;

    this.courrierService.createCourrier(this.courrierPayload).subscribe(
      data => {
        data = this.courrierPayload;
        if (data){
          console.log('Courrier saved successfully');
          console.log(data);
          this.router.navigateByUrl('/courriers/lists');
        }else {
          console.log('Courrier saved failled');
        }
      }
    );
  }

}
