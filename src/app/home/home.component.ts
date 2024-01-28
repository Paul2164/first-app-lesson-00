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
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>      
      </form>
    </section>
    <section class=results>
      <app-housinglocation
      *ngFor = "let housinglocation of filteredLocationList"
      [housinglocation]="housinglocation"></app-housinglocation>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housinglocationList : HousingLocation[] = [];
  housingService : HousingService = inject(HousingService);
  filteredLocationList : HousingLocation[] = [];

  
  constructor() {
   this.housingService.getAllHousinglocations().then((
    housinglocationList :HousingLocation[]) => {
      this.housinglocationList = housinglocationList;
      this.filteredLocationList = housinglocationList;
    })
  }

  filterResults(text:string) {
    if(!text) {
      this.filteredLocationList = this.housinglocationList;
      return;
    }
    this.filteredLocationList = this.housinglocationList.filter(
      housinglocation => 
      housinglocation?.city.toLowerCase().includes(
        text.toLowerCase())
    );
  }
}
