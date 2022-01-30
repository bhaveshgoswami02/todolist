import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
    ],
    imports: [
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [
    ]
})
export class MaterialModule { }
