import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu";
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root', // La balise à utiliser pour ce composant  
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent
], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  
}
