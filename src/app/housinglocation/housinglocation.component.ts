import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  template: `
    
  <section class="listing">
    <img class="listing-photo" [src]="housinglocation.photo"
    alt="Exterior photo of {{housinglocation.name}}">
    <h2 class="listing-heading">{{housinglocation.name}}</h2>
    <p class="listing-location">{{housinglocation.city}},
    {{housinglocation.state}}</p>
  </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housinglocation! : HousingLocation;
}
