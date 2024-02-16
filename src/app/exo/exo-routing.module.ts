import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExoComponent} from "./exo.component";
import {ExoHomeComponent} from "./exo-home/exo-home.component";
import {ExoBindingsComponent} from "./exo-bindings/exo-bindings.component";
import {ExoPipeComponent} from "./exo-pipe/exo-pipe.component";
import {ExoDirectivesComponent} from "./exo-directives/exo-directives.component";
import {ExoInputOutputComponent} from "./exo-input-output/exo-input-output.component";
import {ExoServiceComponent} from "./exo-service/exo-service.component";

const routes: Routes = [
  {
    path: '',
    component: ExoComponent,
    children: [
      {path: 'home', component: ExoHomeComponent},
      {path: 'bindings', component: ExoBindingsComponent},
      {path: 'pipe', component: ExoPipeComponent},
      {path: 'directives', component: ExoDirectivesComponent},
      {path: 'input_output', component:ExoInputOutputComponent},
      {path: 'service', component:ExoServiceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
