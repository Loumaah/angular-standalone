import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {

  personnes: Personne[] = [];

  constructor() {
    this.personnes = [
      {id: 1, nom: "Wick", prenom: "John", age: 45},
      {id: 2, nom: "Doe", prenom: "Jane", age: 30},
      {id: 3, nom: "Smith", prenom: "Will", age: 50},
      {id: 4, nom: "Drucker", prenom: "Michel", age: 153}
    ]
  }

  findAll() {
    return this.personnes;
  }

  save(p: Personne) {
    this.personnes.push(p);
  }

  remove(ind: number) {
    this.personnes.splice(ind, 1);
  }

}
