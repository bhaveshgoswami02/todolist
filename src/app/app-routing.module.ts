import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'manage-landing',
    pathMatch:'full'
  },
  {
    path: 'manage-landing',
    loadChildren: () => import('./manage-landing/manage-landing.module').then( m => m.ManageLandingModule)
  },
  {
    path: 'manage-todo',
    loadChildren: () => import('./manage-todo/manage-todo.module').then( m => m.ManageTodoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
