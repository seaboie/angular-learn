import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pages',
  imports: [],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  pageId = input.required<string>();
  limit = input.required<string>();
  food = input.required<string>();
}
