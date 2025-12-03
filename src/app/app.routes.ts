import { Routes } from '@angular/router';
import { ComputedComponent } from './reactive-module/computed/computed';
import { ObservableComponent } from './reactive-module/observable/observable';
import { SubjectComponent } from './reactive-module/subject/subject';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AdresseComponent } from './components/routage-module/adresse/adresse';
import { StagiaireComponent } from './components/routage-module/stagiaire/stagiaire';
import { CalculComponent } from './components/routage-module/calcul/calcul';
import { TableauComponent } from './components/routage-module/tableau/tableau';
import { NotFoundComponent } from './components/notfound/notfound';
import { FormulaireSimpleComponent } from './components/formulaire-module/formulaire-simple/formulaire-simple';
import { FormulaireReactifComponent } from './components/formulaire-module/formulaire-reactif/formulaire-reactif';
import { FormulaireReactifBuilderComponent } from './components/formulaire-module/formulaire-reactif-builder/formulaire-reactif-builder';
import { FormulaireSignalComponent } from './components/formulaire-module/formulaire-signal/formulaire-signal';
import { PersonneComponent } from './components/personne-module/personne/personne';
import { PereComponent } from './components/interaction-module/pere/pere';
import { PrimeurComponent } from './components/interaction-module/primeur/primeur';
import { ParentComponent } from './components/interaction-module/parent/parent';
import { ClavierComponent } from './components/interaction-module/clavier/clavier';
import { PaysComponent } from './components/interaction-module/pays/pays';
import { ContainerComponent } from './components/interaction-module/container/container';
import { TchatComponent } from './components/interaction-module/tchat/tchat';
import { PersonneDetailsComponent } from './components/personne-module/personne-details/personne-details';
import { CommentComponent } from './components/formulaire-module/comment/comment';
import { CalculetteComponent } from './components/formulaire-module/calculette/calculette';
import { AuthComponent } from './components/auth/auth';

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
  {path: 'comment', component: CommentComponent},
  {path: 'signal', component: FormulaireSignalComponent},
  {path: 'personne', component: PersonneComponent},
  {path: 'pere', component: PereComponent},
  {path: 'primeur', component: PrimeurComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'clavier', component: ClavierComponent},
  {path: 'pays', component: PaysComponent},
  {path: 'container', component: ContainerComponent},
  {path: 'tchat', component: TchatComponent},
  {path: 'personne/:id', component: PersonneDetailsComponent},
  {path: 'auth', component: AuthComponent},
  // À placer en dernier
  // { path: '**', component: NotFoundComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];
