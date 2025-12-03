import { Component, EventEmitter, Input, Output, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ville',
  imports: [FormsModule],
  templateUrl: './ville.html',
  styleUrl: './ville.css',
})
export class VilleComponent {

  ville = model<string>('')

  /* @Input() ville = ''
  @Output() villeChange = new EventEmitter<string>() */

  /* sendVille() {
    this.villeChange.emit(this.ville)
  } */

}
