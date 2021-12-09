import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-static',
  templateUrl: './formly-static.component.html',
  styleUrls: ['./formly-static.component.css']
})
export class FormlyStaticComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({});
  model = { };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        placeholder: 'First Name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        placeholder: 'Email Address',
        required: true,
      }
    }
  ];

  onSubmit(model) {
    console.log(model);
  }

}
