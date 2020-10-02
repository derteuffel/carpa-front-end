import { Component, OnInit } from '@angular/core';
import {Courriers} from '../courriers';
import {CourrierPayload} from '../courrier-payload';
import {ActivatedRoute, Router} from '@angular/router';
import {CourrierService} from '../../courrier.service';
import {UserDetail} from '../../users/user-details/user-detail';

@Component({
  selector: 'app-courrier-update',
  templateUrl: './courrier-update.component.html',
  styleUrls: ['./courrier-update.component.css']
})
export class CourrierUpdateComponent implements OnInit {

  courrier: Courriers;
  courrierPayload: CourrierPayload;
  receiverDate: Date;
  senderDate: Date;
  permalink: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private courrierService: CourrierService) {
    this.courrierPayload = {
      senderName: '',
      senderDate: new Date(),
      receiverDate: new Date(),
      receiverName: '',
      objet: '',
      referenceNumber: '',
      typeCourrier: ''
    };
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.permalink = params['id'];
    });

    this.courrierService.getOne(this.permalink).subscribe((data: Courriers) => {
      if (data){
        console.log('Courrier fetched successfully');
        this.courrier = data;
      }else {
        console.log('Courrier fetched failled');
      }
    });
  }

  onSubmit(){

    this.courrierPayload.typeCourrier = this.courrier.typeCourrier;
    this.courrierPayload.referenceNumber = this.courrier.referenceNumber;
    this.courrierPayload.objet = this.courrier.objet;
    this.courrierPayload.receiverName = this.courrier.receiverName;
    this.courrierPayload.receiverDate = this.receiverDate;
    this.courrierPayload.senderDate = this.senderDate;
    this.courrierPayload.senderName = this.courrier.senderName;
    this.courrierService.updateCourrier(this.courrierPayload, this.permalink).subscribe(
      data => {
        if (data){
          data = this.courrierPayload;
          console.log('Courrier update successfully');
          console.log(data);
          this.router.navigateByUrl('/courriers/details/' + this.permalink);
        }else {
          console.log('Courrier updated failed');
        }
      }
    );

  }

}
