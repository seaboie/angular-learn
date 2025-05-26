import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { AuthService } from './auth/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  city = 'San Francisco';

  authService = inject(AuthService);
  router = inject(Router);

  logOut() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
