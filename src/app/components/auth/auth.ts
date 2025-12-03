import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {

  user: User = { username: '', password: '' }
  users: User[] = [
    { username: "user", password: "user" },
    { username: "admin", password: "admin" },
    { username: "sadmin", password: "sadmin" }
  ];
  erreur = signal<string | null>(null);

  constructor(private router: Router) {}

  login() {
    const foundUser = this.users.find(
      u => u.username === this.user.username && 
      u.password === this.user.password
    );
    
    if (foundUser) {
      this.erreur.set(null);
      this.router.navigate(['/primeur']);
    } else {
      this.erreur.set('Identifiants incorrects.');
    }
  }
}
