import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsCreationComponent } from './details-creation/details-creation.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'detail', component:DetailsComponent},
  {path:'detailCreation',component:DetailsCreationComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingcomponent =[HomeComponent, DetailsComponent];