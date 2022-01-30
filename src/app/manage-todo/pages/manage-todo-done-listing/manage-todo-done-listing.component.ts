import { Component, OnInit } from '@angular/core';
import { ManageTodoService } from '../../services/manage-todo.service';

@Component({
  selector: 'app-manage-todo-done-listing',
  templateUrl: './manage-todo-done-listing.component.html',
  styleUrls: ['./manage-todo-done-listing.component.scss']
})
export class ManageTodoDoneListingComponent implements OnInit {

  all_data:any = []

  constructor(public todoService: ManageTodoService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.all_data = this.todoService.getAll()
  }

}
