import { Component, OnInit } from '@angular/core';
import {Courriers} from '../courriers';
import {Observable} from 'rxjs';
import {UserDetail} from '../../users/user-details/user-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {CourrierService} from '../../services/courrier.service';
import {UserService} from '../../users/user.service';

@Component({
  selector: 'app-courrier-add-users',
  templateUrl: './courrier-add-users.component.html',
  styleUrls: ['./courrier-add-users.component.css']
})
export class CourrierAddUsersComponent implements OnInit {

  courrier: Courriers;
  permalink: number;
  utilisateurs: string[];
  users: Observable<UserDetail[]>;

  constructor(private activatedRoute: ActivatedRoute, private courrierService: CourrierService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.permalink = params['id'];
    });

    this.courrierService.getOne(this.permalink).subscribe((data: Courriers) => {
      if (data){
        console.log('Courrier fetched successfully');
        this.courrier = data;
        console.log(this.courrier);
      }else {
        console.log('Courrier fetched failled');
      }
    });
    this.getUsers();
  }

  getUsers(){
    this.users = this.userService.getAllUsers();
    console.log('Voici la liste' + this.users);
  }

  onSubmit(){
    console.log(this.utilisateurs);
    this.courrierService.addUserToCourrier(this.utilisateurs, this.courrier.id).subscribe(
      data => {
        if (data){
          console.log('Action successfully');
          this.router.navigateByUrl('/courriers/details/' + this.courrier.id);
        }else {
          console.log('Action failed');
        }
      }
    );
  }

}
