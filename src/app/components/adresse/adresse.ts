import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adresse',
  imports: [RouterLink],
  templateUrl: './adresse.html',
  styleUrl: './adresse.css',
})
export class AdresseComponent {

  // Décorateur qui permet de récupérer les paramètres de manière asynchrone
  @Input() ville = '';
  @Input("cp") codePostal = '';

  /* // Angular 14
  route = inject(ActivatedRoute);

  // Angular 13 et antérieur
  // constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Solution asynchrone avec les observables
      this.route.queryParamMap.subscribe(params => {
      this.ville = params.get('ville') ?? '';
      this.cp = params.get('cp') ?? '';
    });

    // Solution synchrone avec un snapshot
    // this.ville = this.route.snapshot.queryParamMap.get('ville') ?? '';
    // this.cp = this.route.snapshot.queryParamMap.get('cp') ?? '';
  } */

}
