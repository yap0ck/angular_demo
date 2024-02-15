import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import {FormsModule} from "@angular/forms";
import { DemoHomeComponent } from './demo-home/demo-home.component';
import {DemoComponent} from "./demo.component";
import {DemoRoutingModule} from "./demo-routing.module";



@NgModule({
  declarations: [
    DemoBindingsComponent,
    DemoHomeComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
