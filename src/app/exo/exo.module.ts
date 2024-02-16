import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoHomeComponent } from './exo-home/exo-home.component';
import { ExoBindingsComponent } from './exo-bindings/exo-bindings.component';
import {ExoComponent} from "./exo.component";
import {FormsModule} from "@angular/forms";
import { ExoPipeComponent } from './exo-pipe/exo-pipe.component';
import { SecMinsecPipe } from './sec-minsec.pipe';
import { ExoDirectivesComponent } from './exo-directives/exo-directives.component';
import { ExoInputOutputComponent } from './exo-input-output/exo-input-output.component';
import { EnfantComponent } from './exo-input-output/enfant/enfant.component';
import { ExoServiceComponent } from './exo-service/exo-service.component';
import { InstructionsComponent } from './exo-service/instructions/instructions.component';


@NgModule({
  declarations: [
    ExoComponent,
    ExoHomeComponent,
    ExoBindingsComponent,
    ExoPipeComponent,
    SecMinsecPipe,
    ExoDirectivesComponent,
    ExoInputOutputComponent,
    EnfantComponent,
    ExoServiceComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule
  ]
})
export class ExoModule { }
