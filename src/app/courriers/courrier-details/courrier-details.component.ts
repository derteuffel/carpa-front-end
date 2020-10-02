import { Component, OnInit } from '@angular/core';
import {Courriers} from '../courriers';
import {ActivatedRoute, Router} from '@angular/router';
import {CourrierService} from '../../courrier.service';

@Component({
  selector: 'app-courrier-details',
  templateUrl: './courrier-details.component.html',
  styleUrls: ['./courrier-details.component.css']
})
export class CourrierDetailsComponent implements OnInit {

  courrier: Courriers;
  permalink: number;

  constructor(private activatedRoute: ActivatedRoute, private courrierService: CourrierService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.permalink = params['id'];
    });

    this.courrierService.getOne(this.permalink).subscribe(
      (data: Courriers) => {
        if (data){
          console.log('Courrier fetched successfuly');
          this.courrier = data;
          console.log(this.courrier);
        }else {
          console.log('Courrier fetched failed');
        }
      }
    );
  }

  utilisateurs(){

    this.router.navigateByUrl('/courriers/details/users/' + this.courrier.id);

  }

  archiver(){
    this.courrierService.archiverCourrier(this.courrier.id).subscribe(
      data => {
        if (data){
          console.log('Courrier archived successfully');
          window.location.reload();
        }else {
          console.log('Courrier archived failed');
        }
      }
    );
  }

  ajouterUtilisateur(){
    this.router.navigateByUrl('/courriers/details/add-users/' + this.courrier.id);
  }

}
