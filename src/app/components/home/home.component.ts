import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../interface/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section class="form">
      <form>
        <input 
          type="text" 
          [placeholder]="originalPlaceholder" 
          #filter 
          (input)="filterResults(filter.value)"
          (focus)="clearPlaceHolder(filter)"
          (blur)="restorePlaceholder(filter)"
        />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      />
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {

  originalPlaceholder = "Filter by City"
  
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation.city.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  clearPlaceHolder(inputElement: HTMLInputElement) {
    inputElement.placeholder = "";
  }

  restorePlaceholder(inputElement: HTMLInputElement) {
    if (!inputElement.value) {
      inputElement.placeholder = this.originalPlaceholder;
    }
  }
}
