import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Observable } from 'rxjs';
import { Employee } from '../form-upload/Employee';

@Component({
  selector: 'form-download',
  templateUrl: './form-download.component.html',
  styleUrls: ['./form-download.component.css']
})
export class FormDownloadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<Employee[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
      console.log(JSON.stringify(this.fileUploads));
    }
  }

}
