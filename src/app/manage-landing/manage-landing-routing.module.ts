import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageLandingComponent } from './manage-landing.component';

const routes: Routes = [
    {
        path: '',
        component: ManageLandingComponent
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
export class ManageLandingRoutingModule { }
