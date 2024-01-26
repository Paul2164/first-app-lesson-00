import { Component, inject } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import  {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousinglocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>      
      </form>
    </section>
    <section class=results>
      <app-housinglocation
      *ngFor = "let housinglocation of housinglocationList"
      [housinglocation]="housinglocation"></app-housinglocation>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housinglocationList : HousingLocation[] = [];
  housingService : HousingService = inject(HousingService);
  constructor() {
    this.housinglocationList = 
    this.housingService.getAllHousinglocations()
  }
}
