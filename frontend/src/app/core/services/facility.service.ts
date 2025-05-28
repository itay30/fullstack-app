import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  coordinates: Coordinates;
}

interface Booking {
  facilityId: string;
  facilityName: string;
  startDate: string;
  endDate: string;
  user: string;
  description: string;
}

export interface Facility {
  _id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  capacity: number;
  location: Location;
  image: string;

  bookings: Booking[];
}

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiUrl = 'http://localhost:3000/api/facilities';

  constructor(private http: HttpClient) {}

  getAllFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiUrl);
  }

  getFacilityById(id: string): Observable<Facility> {
    return this.http.get<Facility>(`${this.apiUrl}/${id}`).pipe(
      map(facility => {
        // Get bookings from localStorage
        const allBookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
        
        // Filter bookings for this facility
        const facilityBookings = allBookings.filter(booking => booking.facilityId === id);
        
        // Add bookings to facility
        const facilityWithBookings = {
          ...facility,
          bookings: facilityBookings
        };
        
        return facilityWithBookings;
      })
    );
  }

  searchFacilities(query: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.apiUrl}/search/${query}`);
  }
} 