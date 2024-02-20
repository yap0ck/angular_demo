import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from "./demo.component";
import {DemoBindingsComponent} from "./demo-bindings/demo-bindings.component";
import {DemoHomeComponent} from "./demo-home/demo-home.component";
import {DemoPipeComponent} from "./demo-pipe/demo-pipe.component";
import {DemoDirectivesComponent} from "./demo-directives/demo-directives.component";
import {DemoInputOutputComponent} from "./demo-input-output/demo-input-output.component";
import {DemoServicesComponent} from "./demo-services/demo-services.component";
import {DemoFormsComponent} from "./demo-forms/demo-forms.component";
import {GEOFFRE_ONLY} from "./guard/geoffrey-only.guard";

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children:[
      {path: 'home', component: DemoHomeComponent},
      {path: 'bindings', component: DemoBindingsComponent},
      {path: 'pipe', component: DemoPipeComponent},
      {path: 'directives', component: DemoDirectivesComponent},
      {path: 'input_output', component: DemoInputOutputComponent},
      {path: 'service', component: DemoServicesComponent},
      {path: 'forms', component: DemoFormsComponent, canActivate: [GEOFFRE_ONLY]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
