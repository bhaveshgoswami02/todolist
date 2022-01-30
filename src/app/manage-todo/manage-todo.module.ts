import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';
import { ManageTodoRoutingModule } from './manage-todo-routing.module';
import { ManageTodoComponent } from './manage-todo.component';
import { ManageTodoAddEditComponent } from './pages/manage-todo-add-edit/manage-todo-add-edit.component';
import { ManageTodoDoneListingComponent } from './pages/manage-todo-done-listing/manage-todo-done-listing.component';
import { ManageTodoListingComponent } from './pages/manage-todo-listing/manage-todo-listing.component';

@NgModule({
    declarations: [
        ManageTodoComponent,
        ManageTodoListingComponent,
        ManageTodoDoneListingComponent,
        ManageTodoAddEditComponent
    ],
    imports: [
        SharedModule,
        ManageTodoRoutingModule
    ],
})

export class ManageTodoModule { }
