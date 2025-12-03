import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {

  user: User = { username: '', password: '', grantType: 'PASSWORD' }
  erreur = signal<string | null>(null);

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  login() {
    this.authService.findUserByUsernameAndPassword(this.user).subscribe({
      next: (res) => {
        console.log(res);        
        localStorage.setItem('tokens', JSON.stringify(res));
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('/personne');
      },
      error: (err) => {
        console.error(err);
        this.erreur.set('Identifiants incorrects.');
      }
    })
  }
}
