import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { ManageTodoService } from '../../services/manage-todo.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-manage-todo-add-edit',
  templateUrl: './manage-todo-add-edit.component.html',
  styleUrls: ['./manage-todo-add-edit.component.scss']
})
export class ManageTodoAddEditComponent implements OnInit {

  formData!: FormGroup
  matcher = new MyErrorStateMatcher();
  index:any = null;

  constructor(
    public fb: FormBuilder,
    public common: CommonService,
    public router: Router,
    public route: ActivatedRoute,
    public todoService: ManageTodoService,
  ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.index = this.route.snapshot.paramMap.get("index")
    if(this.index || this.index == 0) {
      this.getSingleData()
    }
  }

  initializeForm() {
    this.formData = this.fb.group({
      'title': [, Validators.required],
      'description': [, Validators.required],
      'repeating_task': [, Validators.required],
      'is_completed': [false, Validators.required],
    })
  }

  //---------------------------------------- Getters start --------------------------------------//
  get title() {
    return this.formData.get('title') as FormGroup
  }
  get description() {
    return this.formData.get('description') as FormGroup
  }
  get repeating_task() {
    return this.formData.get('repeating_task') as FormGroup
  }

  getSingleData() {
    let data = this.todoService.getSingle(this.index)
    this.formData.patchValue(data)
  }

  onSubmit() {
    if(this.index || this.index == 0) {
      this.todoService.edit(this.index,this.formData.value)
    }
    else
    {
      this.todoService.add(this.formData.value)
    }
    this.router.navigateByUrl("/manage-todo/listing")
  }
  
}
