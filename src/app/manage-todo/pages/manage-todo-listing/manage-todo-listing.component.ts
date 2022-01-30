import { Component, OnInit } from '@angular/core';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-manage-todo-listing',
  templateUrl: './manage-todo-listing.component.html',
  styleUrls: ['./manage-todo-listing.component.scss']
})
export class ManageTodoListingComponent implements OnInit {

  all_data:any = []

  constructor(public todoService: ManageTodoService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.all_data = this.todoService.getAll()
  }
  
  delete(index: number) {
    this.todoService.delete(index)
  }

}
