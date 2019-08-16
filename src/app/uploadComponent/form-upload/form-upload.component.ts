import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from './Employee';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  employee: Employee;

  constructor(private uploadService: UploadFileService) {
   }
   empForm: FormGroup;
  ngOnInit() {
    this.empForm = new FormGroup({
      empId: new FormControl(''),
      name: new FormControl(''),
      designation: new FormControl(''),
      salary: new FormControl('')
  });

  }

  fileChange(event) {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {

    this.currentFileUpload = this.selectedFiles.item(0);

    // const formdata: FormData = new FormData();
    // formdata.append('username', form.value.username);
    const formData: FormData = new FormData();
    this.employee = new Employee();

    this.employee.empId = this.empForm.value.empId;
    this.employee.name = this.empForm.value.name;
    this.employee.designation = this.empForm.value.designation;
    this.employee.salary = this.empForm.value.salary;

    // formData.append('userFile', this.file);
    formData.append('file', this.currentFileUpload);
    // formData.append('emp', this.employee);
    for ( const key of Object.keys(this.employee) ) {
      const value = this.employee[key];
      console.log('value::', value);
      formData.append(key, value);
    }
    console.log(formData);
    this.uploadService.pushFileToStorage(formData).subscribe(event => {
     });

    this.selectedFiles = undefined;
  }

}
