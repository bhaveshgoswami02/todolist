import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
    ],
    imports: [
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule
    ],
    providers: [
    ]
})
export class MaterialModule { }
