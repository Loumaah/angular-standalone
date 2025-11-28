import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  imports: [],
  templateUrl: './stagiaire.html',
  styleUrl: './stagiaire.css',
})
export class StagiaireComponent implements OnInit {
  nom = ""
  prenom = ""

  constructor(private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    // Asynchrone
    /* this.route.paramMap.subscribe(params => {
      this.nom = params.get('nom') ?? ''
      this.prenom = params.get('prenom') ?? ''
    }) */

    // Synchrone
    this.nom = this.route.snapshot.paramMap.get('nom') ?? ''
    this.prenom = this.route.snapshot.paramMap.get('prenom') ?? ''
  }


}
