import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoHomeComponent } from './exo-home/exo-home.component';
import { ExoBindingsComponent } from './exo-bindings/exo-bindings.component';
import {ExoComponent} from "./exo.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ExoComponent,
    ExoHomeComponent,
    ExoBindingsComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule
  ]
})
export class ExoModule { }
