import { AfterViewInit, Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { FilsComponent } from "../fils/fils";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent implements OnInit, AfterViewInit {
  
  @ViewChild(FilsComponent) fils!: FilsComponent;
  // Angular 19
  // fils = viewChild(FilsComponent)

  nom = 'Bob l\'éponge'
  maVille = 'Bikini Bottom'

  ngOnInit(): void {
    // exécuter pendant l'initialisation du composant : Pere
    console.log(this.fils);
    
  }

  ngAfterViewInit(): void {
    // exécuter après l'initialisation de la vue du composant : Pere
    console.log(this.fils);
  }

  premierEnfant() {
    console.log(this.fils);
    console.log(this.fils.ville());
  }
    
}
