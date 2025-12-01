import { Component } from '@angular/core';
import { FilsComponent } from "../fils/fils";

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent {
  nom = 'Bob l\'éponge'
  maVille = 'Bikini Bottom'
}
