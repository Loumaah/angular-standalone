import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../../services/login-logout';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {

  // !! transforme toutes valeurs en valeurs booléennes
  isConnected = signal(!!localStorage.getItem('tokens'))
  
  constructor(
    private router: Router,
    private logService: LoginLogoutService
  ) {
    this.logService.getSubject().subscribe(v => this.isConnected.set(v))
  }

  login() {
    this.router.navigateByUrl('/auth')
  }

  logout() {
    localStorage.removeItem('tokens')
    localStorage.removeItem('user')
    this.logService.isConnected(false)
    this.router.navigateByUrl('/')
  }

}
