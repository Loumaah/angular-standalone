import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {

  private url = `http://localhost:8080/ws/personnes`
  private personnes: Personne[] = [];

  constructor(private http: HttpClient) {
    this.personnes = [
      {id: 1, nom: "Wick", prenom: "John", age: 45},
      {id: 2, nom: "Doe", prenom: "Jane", age: 30},
      {id: 3, nom: "Smith", prenom: "Will", age: 50},
      {id: 4, nom: "Drucker", prenom: "Michel", age: 153}
    ]
  }

  findAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.url);
  }

  save(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }

  remove(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
