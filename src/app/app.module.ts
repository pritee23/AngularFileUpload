import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormUploadComponent } from './uploadComponent/form-upload/form-upload.component';
import { FormDownloadComponent } from './uploadComponent/form-download/form-download.component';
import { FormDetailsComponent } from './uploadComponent/form-details/form-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    FormDownloadComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
