import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { SslcComponent } from './description/sslc/sslc.component';
import { PucComponent } from './description/puc/puc.component';
import { DegreeComponent } from './description/degree/degree.component';


const routes: Routes = [
  {component:DescriptionComponent,path:"description"},
  {component:SslcComponent,path:"description/sslc"},
  {component:PucComponent,path:"description/puc"},
  {component:DegreeComponent,path:"description/degree"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
