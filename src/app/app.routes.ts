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
import { NotFoundComponent } from './components/notfound/notfound';
import { FormulaireSimpleComponent } from './components/formulaire-simple/formulaire-simple';
import { CalculetteComponent } from './components/calculette/calculette';
import { FormulaireReactifComponent } from './components/formulaire-reactif/formulaire-reactif';
import { FormulaireReactifBuilderComponent } from './components/formulaire-reactif-builder/formulaire-reactif-builder';

// Ici on définit les routes de nos composants
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'about', component: AboutComponent},
  // Query params : /adresse?ville=Paris&cp=75000
  {path: 'adresse', component: AdresseComponent },
  {path: 'address', redirectTo: 'adresse' },
  // Route params : /stagiaire/Doe/John
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  // Route et query params : /calcul/plus?a=5&b=3
  {path: 'calcul/:op', component: CalculComponent},
  { path: 'tableau/:indice', component: TableauComponent },
  {path: 'observable', component: ObservableComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'computed', component: ComputedComponent},
  {path: 'formulaire', component: FormulaireSimpleComponent},
  {path: 'calculette', component: CalculetteComponent},
  {path: 'reactive', component: FormulaireReactifComponent},
  {path: 'builder', component: FormulaireReactifBuilderComponent},
  // À placer en dernier
  // { path: '**', component: NotFoundComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];
