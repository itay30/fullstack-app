import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

export interface Facility {
  _id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  capacity: number;
  location: Location;
  image: string;
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
    return this.http.get<Facility>(`${this.apiUrl}/${id}`);
  }

  getFacilitiesByType(type: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.apiUrl}/type/${type}`);
  }

  searchFacilities(query: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.apiUrl}/search/${query}`);
  }
} 