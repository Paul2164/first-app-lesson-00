import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  template: `
    
  <section class="listing">
    <img class="listing-photo" [src]="housinglocation.photo"
    alt="Exterior photo of {{housinglocation.name}}">
    <h2 class="listing-heading">{{housinglocation.name}}</h2>
    <p class="listing-location">{{housinglocation.city}},
    {{housinglocation.state}}</p>
    <a [routerLink]="['/details',housinglocation.id]">
    Learn More</a>
  </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housinglocation! : HousingLocation;
}
