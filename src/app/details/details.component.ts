import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housinglocation?.photo"
        alt="Exterior photo of {{housinglocation?.name}}">
      <section class="listing-description">
        <h2 class="listing-heading">{{housinglocation?.city}},
        {{housinglocation?.state}}</h2>
      </section>
      <section class="listing-feature">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available:{{housinglocation?.availableUnits}}</li>
          <li>Does this location have wifi:{{housinglocation?.wifi}}</li>
          <li>Does this location have laundry: {{housinglocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type= "text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type= "text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type= "email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route : ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housinglocation : HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),

  })
  constructor() {
    const housinglocationId = 
    parseInt(this.route.snapshot.params['id'],10);
    this.housingService.getHousinglocationById(housinglocationId).then(
      housinglocation => {
        this.housinglocation = housinglocation;
      }
    )
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
