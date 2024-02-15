import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.css'
})
export class DemoBindingsComponent {
  reponseATout : number = 42;
  monInput?: String
  isClickable = true;
}
