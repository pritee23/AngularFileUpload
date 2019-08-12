import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private uploadService: UploadFileService) {
   }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(form: NgForm) {

    this.currentFileUpload = this.selectedFiles.item(0);

    const formdata: FormData = new FormData();
    formdata.append('username', form.value.username);
    formdata.append('file', this.currentFileUpload);
    console.log(formdata);
    this.uploadService.pushFileToStorage(formdata).subscribe(event => {
     });

    this.selectedFiles = undefined;
  }

}
