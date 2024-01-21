import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>      
      </form>
    </section>
    <section class=results>
      <app-housinglocation></app-housinglocation>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 
  'https://angulr.io/assets/images/tutorials/faa';

  housinglocation : HousingLocation = {
    id : 9999,
    name : 'Test Home',
    city : 'Test City',
    state : 'ST',
    photo : `${this.baseUrl}/example-house.jpg`,
    availableUnits :99,
    wifi : true,
    laundry : false
  }
}
