import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FacilitiesComponent } from './facilities.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: ':id',
    component: FacilityDetailComponent
  }
];

@NgModule({
  declarations: [
    FacilitiesComponent,
    FacilityDetailComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FacilitiesModule { } 