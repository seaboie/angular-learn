import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoggedIn = false;

  constructor() { }

  private isValidateCredential(username: string, password: string): boolean {
    return username === 'admin' && password === 'password';
  }

  login(username: string, password: string): boolean {
    if (this.isValidateCredential(username, password)) {
      this.isLoggedIn = true;
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('username', username);
      localStorage.setItem('password', 'password');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  isAuthenticate(): boolean {
    return this.isLoggedIn || localStorage.getItem('token') !== null;
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('username');
  }

}
