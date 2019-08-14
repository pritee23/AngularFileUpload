import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  @Input() fileUpload: string;

  constructor() { }

  ngOnInit() {
  }

}
