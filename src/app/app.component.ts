import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  windowInnerWidth: any
  routes = [
    { icon: 'home', title: 'Home', link: '/manage-landing' },
    { icon: 'list', title: 'Manage Todo', link: '/manage-todo' },
  ]
  
  constructor(public common: CommonService) { }

  ngOnInit(): void {
    this.windowInnerWidth = window.innerWidth;
  }
}
