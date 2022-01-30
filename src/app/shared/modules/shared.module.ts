import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../components/loader/loader.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from '../components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
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
  ],
  providers:[
  ]
})
export class SharedModule { }
