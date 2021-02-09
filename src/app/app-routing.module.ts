import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CheckListComponent} from './check-list/check-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/checkList', pathMatch: 'full' },
  
  { path: 'checkList', component: CheckListComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
