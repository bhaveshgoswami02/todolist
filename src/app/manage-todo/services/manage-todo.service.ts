import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageTodoService {

  all_lists: any = []

  constructor() { }

  add(data: any) {
    this.all_lists.push(data)
  }

  getAll() {
    return this.all_lists
  }

  getSingle(index:number) {
    return this.all_lists[index]
  }

  edit(index: number, data: any) {
    this.all_lists[index] = data
  }

  delete(index: number) {
    this.all_lists.splice(index, 1)
  }

  clearList() {
    this.all_lists = []
  }
}
