import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  private url: string

  constructor(private http: HttpClient) { 
    this.url = environment.BACKEND_URL + '/personnes'
   }

  findAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.url)
  }

  findById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.url}/${id}`)
  }

  save(p: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.url, p)
  }

  update(id: number, p: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.url}/${id}`, p)
  }

  remove(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}