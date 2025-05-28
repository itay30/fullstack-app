import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Booking {
  facilityId: string;
  facilityName: string;
  startDate: string;
  endDate: string;
  user: string;
  description: string;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];
  loading: boolean = true;
  error: string = '';

  get today(): string {
    return new Date().toISOString();
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  private loadBookings(): void {
    try {
      this.loading = true;
      const bookings = localStorage.getItem('bookings');
      this.bookings = bookings ? JSON.parse(bookings) : [];
      
      // Sort bookings by start date
      this.bookings.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());      
      
      this.loading = false;
    } catch (error) {
      console.error('Error loading bookings:', error);
      this.error = 'Failed to load bookings.';
      this.loading = false;
    }
  }

  getUpcomingBookings(): Booking[] {
    return this.bookings.filter(booking => this.isUpcoming(booking.startDate));
  }

  getPastBookings(): Booking[] {
    return this.bookings.filter(booking => this.isPast(booking.endDate));
  }

  cancelBooking(index: number): void {
    try {
      this.bookings.splice(index, 1);
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
      this.loadBookings();
    } catch (error) {
      console.error('Error canceling booking:', error);
      this.error = 'Failed to cancel booking.';
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  isUpcoming(startDate: string): boolean {
    return new Date(startDate) > new Date();
  }

  isPast(endDate: string): boolean {
    return new Date(endDate) < new Date();
  }

  viewFacility(facilityId: string): void {
    this.router.navigate(['/facilities', facilityId]);
  }

  goToFacilities(): void {
    this.router.navigate(['/facilities']);
  }
} 