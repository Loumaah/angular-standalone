import { Component, inject, OnInit, signal } from '@angular/core';
import { PersonneService } from '../../services/personne';
import { Personne } from '../../models/personne';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personne',
  imports: [FormsModule],
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
  }

  ajouter() {
    this.ps.save(this.personne).subscribe(p => {
      this.personnes.set([...this.personnes(), p]);
    });
    this.personne = { nom: '', prenom: '', age: 0 };
  }

  supprimer(id: number | undefined = 0) {
    this.ps.remove(id).subscribe(() => {
      this.personnes.set(this.personnes().filter(p => p.id !== id));
    });
  }

}
