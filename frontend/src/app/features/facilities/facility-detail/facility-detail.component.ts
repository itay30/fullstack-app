import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilityService, Facility } from '../../../core/services/facility.service';

interface Booking {
  facilityId: string;
  startDate: string;
  endDate: string;
  facilityName: string;
  user: string;
  description: string;
}

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.scss']
})
export class FacilityDetailComponent implements OnInit {
  facility: Facility | null = null;
  startDate: string = '';
  endDate: string = '';
  user: string = '';
  description: string = '';
  error: string = '';
  loading: boolean = true;
  bookingSuccess: boolean = false;

  get today(): string {
    return new Date().toISOString().split('T')[0];
  }

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadFacility(id);
    } else {
      this.router.navigate(['/facilities']);
    }
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString();
  }

  private loadFacility(id: string): void {
    this.loading = true;
    this.facilityService.getFacilityById(id).subscribe({
      next: (facility) => {
        this.facility = facility;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading facility:', error);
        this.error = 'Failed to load facility details.';
        this.loading = false;
      }
    });
  }

  onBook(): void {
    if (!this.facility || !this.startDate || !this.endDate || !this.user) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    const newBooking: Booking = {
      facilityId: this.facility._id,
      startDate: this.startDate,
      endDate: this.endDate,
      facilityName: this.facility.name,
      user: this.user,
      description: this.description
    };

    if (this.isTimeSlotAvailable(newBooking)) {
      this.saveBooking(newBooking);
      this.loadFacility(this.facility._id);
      this.bookingSuccess = true;
      this.error = '';
      setTimeout(() => {
        this.router.navigate(['/facilities']);
      }, 2000);
    } else {
      this.error = 'This time slot is already booked. Please choose different dates.';
    }
  }

  private isTimeSlotAvailable(newBooking: Booking): boolean {
    const thisFacilityBookings: Booking[] = this.facility?.bookings || [];
    const existingBookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newStart = new Date(newBooking.startDate);
    const newEnd = new Date(newBooking.endDate);

    return !thisFacilityBookings.some(booking => {
        const existingStart = new Date(booking.startDate);
        const existingEnd = new Date(booking.endDate);
        
        return (
          (newStart >= existingStart && newStart <= existingEnd) ||
          (newEnd >= existingStart && newEnd <= existingEnd) ||
          (newStart <= existingStart && newEnd >= existingEnd)
        );
    });
  }

  private saveBooking(booking: Booking): void {
    const existingBookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
  }
} 