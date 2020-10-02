import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {CourrierService} from '../courrier.service';
import {Router} from '@angular/router';
import {Courriers} from './courriers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courriers',
  templateUrl: './courriers.component.html',
  styleUrls: ['./courriers.component.css']
})
export class CourriersComponent implements OnInit {

  courriers: Observable<Courriers[]>;
  isLoadingResults = true;
  page = 1;
  searchedKeyword: string;

  constructor(private authService: AuthService, private courrierService: CourrierService) { }

  ngOnInit(): void {
    this.getCourriers();
  }


  getCourriers(){
    this.courriers = this.courrierService.getCourriers();
    console.log(this.courriers);
  }

  entrant(value: string){
    this.courriers = this.courrierService.getCourriersByType(value);
    console.log(this.courriers);
  }

  sortant(value: string){
    this.courriers = this.courrierService.getCourriersByType(value);
    console.log(this.courriers);
  }

  compte(){
    this.courriers = this.courrierService.getCourriersByAccount();
    console.log(this.courriers);
  }

  courrierArchive(){
    this.courriers = this.courrierService.getCourrierByStatus(false);
    console.log(this.courriers);
  }

  courrierActif(){
    this.courriers = this.courrierService.getCourrierByStatus(true);
    console.log(this.courriers);
  }


  handlePageChange(event) {
    this.page = event;
  }
}
