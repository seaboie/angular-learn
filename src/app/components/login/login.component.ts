import { Component, inject, NgModule } from '@angular/core';
import { AuthService } from '../../auth/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  authService = inject(AuthService);
  router = inject(Router);

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      const returnUrl = this.router.parseUrl(this.router.url).queryParams['returnUrl'] || 'products';
      this.router.navigateByUrl(returnUrl);
      this.router.navigate(['products']);
    } else {
      this.error = 'Invalid Credentials....';
    }
    // localStorage.setItem('username', 'admin');
    // localStorage.setItem('password', 'password');
    // this.authService.isLoggedIn = true;
  }
}
