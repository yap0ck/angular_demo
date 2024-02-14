import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: 'exo', loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
