import { Component, input, OnInit, signal, viewChild } from '@angular/core';
import { Personne } from '../../../models/personne';
import { PersonneService } from '../../../services/personne';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneFormComponent } from '../personne-form/personne-form';

@Component({
  selector: 'app-personne-details',
  imports: [FormsModule, PersonneFormComponent],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css',
})
export class PersonneDetailsComponent implements OnInit {

  id = input.required<number>();
  personne= signal<Personne>({ nom: '', prenom: '', age: 0 });
  personneForm = viewChild.required(PersonneFormComponent);

  constructor(
    private personneService: 
    PersonneService, private router: Router
  ) {}

  ngOnInit(): void {
    this.personneService.findById(this.id()).subscribe(p => {
      this.personne.set(p);
    });
  }

  modifier() {
    this.personneService.update(this.id(), this.personneForm().personne()).subscribe(() => {
      this.router.navigateByUrl('/personne');
    });
  }

}
