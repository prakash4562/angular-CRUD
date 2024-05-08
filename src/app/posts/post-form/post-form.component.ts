import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit{
  @Input() initialFormValues: any;
  @Output() submitFormEvent = new EventEmitter();
  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  ngOnInit() {
    if (this.initialFormValues) {
      this.setFormValues(this.initialFormValues);
    }
  }


  submitForm() {
    this.submitFormEvent.emit(this.postForm.value);
    this.postForm.reset();
  }

  setFormValues(formData) {
    this.postForm.patchValue({
      title: formData.title,
      description: formData.description
    })
  }
}
