import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DemoHomeComponent } from './demo-home/demo-home.component';
import {DemoComponent} from "./demo.component";
import {DemoRoutingModule} from "./demo-routing.module";
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { MiMajPipe } from './mi-maj.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import {AppModule} from "../app.module";
import {SurlignageDirective} from "./directives/surlignage.directive";
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { EnfantComponent } from './demo-input-output/enfant/enfant.component';
import { DemoServicesComponent } from './demo-services/demo-services.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';



@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoHomeComponent,
    DemoComponent,
    DemoPipeComponent,
    MiMajPipe,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    EnfantComponent,
    DemoServicesComponent,
    DemoFormsComponent
  ],
  exports: [
    EnfantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SurlignageDirective,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
