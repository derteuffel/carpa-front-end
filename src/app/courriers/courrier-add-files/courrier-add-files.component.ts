import { Component, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../../upload-file-service.service';
import {Observable} from 'rxjs';
import {Courriers} from '../courriers';
import {ActivatedRoute} from '@angular/router';
import {CourrierService} from '../../services/courrier.service';

@Component({
  selector: 'app-courrier-add-files',
  templateUrl: './courrier-add-files.component.html',
  styleUrls: ['./courrier-add-files.component.css']
})
export class CourrierAddFilesComponent implements OnInit {

  permalink: number;
  courrier: Courriers;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadFileService: UploadFileService, private activatedRoute: ActivatedRoute, private courrierService: CourrierService) { }

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
    this.fileInfos = this.uploadFileService.getFiles();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadFileService.upload(this.currentFile, this.permalink).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadFileService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

}
