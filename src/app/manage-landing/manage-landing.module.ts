import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/modules/material.module';
import { SharedModule } from '../shared/modules/shared.module';
import { ManageLandingRoutingModule } from './manage-landing-routing.module';
import { ManageLandingComponent } from './manage-landing.component';

@NgModule({
    declarations: [
        ManageLandingComponent
    ],
    imports: [
        SharedModule,
        MaterialModule,
        ManageLandingRoutingModule
    ],
})

export class ManageLandingModule { }
