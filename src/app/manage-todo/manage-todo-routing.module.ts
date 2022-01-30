import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageTodoAddEditComponent } from './pages/manage-todo-add-edit/manage-todo-add-edit.component';
import { ManageTodoListingComponent } from './pages/manage-todo-listing/manage-todo-listing.component';
import { ManageTodoDoneListingComponent } from './pages/manage-todo-done-listing/manage-todo-done-listing.component';
import { ManageTodoComponent } from './manage-todo.component';

const routes: Routes = [
    {
        path: '',
        component: ManageTodoComponent, children: [
            {
                path: '',
                redirectTo: 'listing',
                pathMatch: 'full'
            },
            {
                path: 'listing',
                component: ManageTodoListingComponent,
            },
            {
                path: 'done-listing',
                component: ManageTodoDoneListingComponent,
            },
            {
                path: 'add-edit',
                component: ManageTodoAddEditComponent,
            },
            {
                path: 'add-edit/:index',
                component: ManageTodoAddEditComponent,
            },
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class ManageTodoRoutingModule { }
