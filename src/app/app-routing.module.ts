import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaumComponent } from './baum/baum.component';

const routes: Routes = [
  {path:'FixtureDemo', component:BaumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
