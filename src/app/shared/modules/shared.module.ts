import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../components/loader/loader.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from '../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyViewComponent } from '../components/empty-view/empty-view.component';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    EmptyViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
    HeaderComponent,
    EmptyViewComponent
  ],
  providers:[
  ]
})
export class SharedModule { }
