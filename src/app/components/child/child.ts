import { Component, input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent {

  nom = input<string>()
  note = 0
  // @Output() sendNote = new EventEmitter<number>()
  // Angular 19
  sendNote = output<number>()
  isDisabled= false

  envoyer() {
    this.sendNote.emit(this.note)
    this.isDisabled = true
  }

}
