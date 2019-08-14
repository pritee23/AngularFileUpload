import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'form-download',
  templateUrl: './form-download.component.html',
  styleUrls: ['./form-download.component.css']
})
export class FormDownloadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }

}
