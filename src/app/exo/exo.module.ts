import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoHomeComponent } from './exo-home/exo-home.component';
import { ExoBindingsComponent } from './exo-bindings/exo-bindings.component';
import {ExoComponent} from "./exo.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExoPipeComponent } from './exo-pipe/exo-pipe.component';
import { SecMinsecPipe } from './sec-minsec.pipe';
import { ExoDirectivesComponent } from './exo-directives/exo-directives.component';
import { ExoInputOutputComponent } from './exo-input-output/exo-input-output.component';
import { EnfantComponent } from './exo-input-output/enfant/enfant.component';
import { ExoServiceComponent } from './exo-service/exo-service.component';
import { InstructionsComponent } from './exo-service/instructions/instructions.component';
import { ExoFormsComponent } from './exo-forms/exo-forms.component';
import { PersonComponent } from './person/person.component';
import { LoginComponent } from './login/login.component';


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
    InstructionsComponent,
    ExoFormsComponent,
    PersonComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        ExoRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ExoModule { }
