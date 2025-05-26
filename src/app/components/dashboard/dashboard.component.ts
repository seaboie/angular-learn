import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  router = inject(Router);

  goToProductPage() {
    this.router.navigateByUrl('products')
  }

  goToSettingsProfile(): void {
    this.router.navigate(['settings/profile']);
  }

  goToSettingsProducts(): void {
    this.router.navigate(['settings/products'])
  }
}
