import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne';

@Component({
  selector: 'app-personne-form',
  imports: [FormsModule],
  templateUrl: './personne-form.html',
  styleUrl: './personne-form.css',
})
export class PersonneFormComponent {

  personne = input.required<Personne>();
  label = input.required<string>();
  onSubmit = output<Personne>();

  envoyer() {
    this.onSubmit.emit(this.personne());
  }

}
