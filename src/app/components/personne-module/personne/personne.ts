import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { PersonneService } from '../../../services/personne';
import { Personne } from '../../../models/personne';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { PersonneFormComponent } from '../personne-form/personne-form';

@Component({
  selector: 'app-personne',
  imports: [FormsModule, RouterLink, PersonneFormComponent],
  templateUrl: './personne.html',
  styleUrl: './personne.css',
})
export class PersonneComponent implements OnInit {

  personnes = signal<Personne[]>([]);
  personne: Personne = { nom: '', prenom: '', age: 0 };
  
  // constructor(private ps: PersonneService) {}
  ps = inject(PersonneService);

  ngOnInit(): void {
    this.ps.findAll().subscribe(res => {
      this.personnes.set(res);
    });
    this.personne = { nom: '', prenom: '', age: 0 };
  }

  ajouter() {
    this.ps.save(this.personne).subscribe(res => {
      this.personnes.set([...this.personnes(), res]);
    });
  }

  supprimer(id: number | undefined = 0) {
    this.ps.remove(id).subscribe(() => {
      this.personnes.set(this.personnes().filter(p => p.id !== id));
    });
  }

  selected = signal<Personne | null>(null);

  showDetails(id: number | undefined = 0) {
    this.ps.findById(id).subscribe(p => {
      this.selected.set(p);
      console.log(this.selected);
      
    });
  }

}

