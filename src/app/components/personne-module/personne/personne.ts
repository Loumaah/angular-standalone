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
  erreur = signal<string | null>(null)
  personne: Personne = { nom: '', prenom: '', age: 0 };
  
  // constructor(private ps: PersonneService) {}
  ps = inject(PersonneService);

  ngOnInit(): void {
    this.ps.findAll().subscribe({
      next: res => {
        this.personnes.set(res);
      },
      error: err => {
        this.erreur.set("Problème de récupération de données");
        console.error('Erreur lors de la récupération des personnes', err);
      }
    });
    this.personne = { nom: '', prenom: '', age: 0 };
  }

  ajouter() {
    this.ps.save(this.personne).subscribe({
      next: p => {
        this.personnes.set([...this.personnes(), p])        
        this.personne = { nom: '', prenom: '', age: 0 }
      },
      error: (err) => {
        this.erreur.set("Insertion impossible.")
        console.error('Erreur lors de l\'ajout de la personne', err);      
      }
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

