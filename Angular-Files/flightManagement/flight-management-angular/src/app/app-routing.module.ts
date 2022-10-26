import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { HomeComponent } from './admin/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"addFlight",component:AddFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
