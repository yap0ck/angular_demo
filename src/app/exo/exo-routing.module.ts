import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from "./exo.component";
import {ExoHomeComponent} from "./exo-home/exo-home.component";
import {ExoBindingsComponent} from "./exo-bindings/exo-bindings.component";

const routes: Routes = [
  {
    path: '',
    component: ExoComponent,
    children: [
      {path: 'home', component: ExoHomeComponent},
      {path: 'bindings', component: ExoBindingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
