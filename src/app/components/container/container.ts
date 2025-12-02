import { Component } from '@angular/core';
import { SecondComponent } from '../second/second';
import { FirstComponent } from '../first/first';

@Component({
  selector: 'app-container',
  imports: [FirstComponent, SecondComponent],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class ContainerComponent {

}
