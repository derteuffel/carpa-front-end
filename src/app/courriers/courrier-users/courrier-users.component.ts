import { Component, OnInit } from '@angular/core';
import {CourrierService} from '../../services/courrier.service';
import {Observable} from 'rxjs';
import {UserDetail} from '../../users/user-details/user-detail';
import {ActivatedRoute} from '@angular/router';
import {Courriers} from '../courriers';

@Component({
  selector: 'app-courrier-users',
  templateUrl: './courrier-users.component.html',
  styleUrls: ['./courrier-users.component.css']
})
export class CourrierUsersComponent implements OnInit {

  lists: Observable<UserDetail[]>;
  courrier: Courriers;
  permalink: number;
  page = 1;
  searchedKeyword: string;
  constructor(private courrierService: CourrierService, private activatedRoute: ActivatedRoute) { }

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

    this.getUsers();
  }

  getUsers(){
    console.log('je suis dedans');
    this.lists = this.courrierService.getUserForCourrier(this.courrier.id);
    console.log('Voici la liste des utilisateurs' + this.lists);
  }

}
