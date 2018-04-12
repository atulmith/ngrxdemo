import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrymasterContainer } from './containers/countrymaster/countrymaster.component';

const routes: Routes = [
  {path:'',component:CountrymasterContainer}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrymasterRoutingModule { }

