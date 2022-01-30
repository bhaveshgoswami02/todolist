import { Component } from '@angular/core';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  routes = [
    { icon: 'home', title: 'Home', link: '/manage-landing' },
    { icon: 'list', title: 'Manage Todo', link: '/manage-todo' },
  ]
  constructor(public common: CommonService) { }

}
