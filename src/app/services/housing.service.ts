import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housing-location';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  url = 'http://localhost:3000/locations';

    // Method
    async getAllHousingLocations(): Promise<HousingLocation[]> {
      const data = await fetch(this.url);
      return await data.json() ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
      const data = await fetch(`${this.url}?id=${id}`);
      const locationJson = await data.json();
      return locationJson[0] ?? {};
    }

    // Submit
    submitApplication(firstName: string, lastName: string, email: string) {
      console.log(`Home application received: firstName : ${firstName}, lastName : ${lastName} , email : ${email}`);
      
    }
}
