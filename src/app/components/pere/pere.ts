import { Component, viewChild, ViewChild } from '@angular/core';
import { FilsComponent } from "../fils/fils";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent {
  // @ViewChild(FilsComponent) fils!: FilsComponent;
  // Angular 19
  fils = viewChild(FilsComponent)

  nom = 'Bob l\'éponge'
  maVille = 'Bikini Bottom'

  premierEnfant() {
    console.log(this.fils());
    console.log(this.fils()?.ville());
  }
    
}
