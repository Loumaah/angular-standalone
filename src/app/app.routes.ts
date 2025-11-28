import { Routes } from '@angular/router';
import { ComputedComponent } from './components/computed/computed';
import { ObservableComponent } from './components/observable/observable';
import { SubjectComponent } from './components/subject/subject';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AdresseComponent } from './components/adresse/adresse';
import { StagiaireComponent } from './components/stagiaire/stagiaire';
import { CalculComponent } from './components/calcul/calcul';
import { TableauComponent } from './components/tableau/tableau';

// Ici on définit les routes de nos composants
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutComponent},
  // Query params : /adresse?ville=Paris&cp=75000
  {path: 'adresse', component: AdresseComponent },
  // Route params : /stagiaire/Doe/John
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  // Route et query params : /calcul/plus?a=5&b=3
  {path: 'calcul/:op', component: CalculComponent},
  { path: 'tableau/:indice', component: TableauComponent },
  {path: 'observable', component: ObservableComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'computed', component: ComputedComponent}
];
