import { Component, OnInit } from '@angular/core';
import { FacilityService, Facility } from '../../core/services/facility.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];
  searchQuery: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.loadFacilities();
  }

  private loadFacilities(): void {
    this.loading = true;
    this.facilityService.getAllFacilities().subscribe({
      next: (facilities) => {
        this.facilities = facilities;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading facilities:', error);
        this.error = 'Failed to load facilities. Please try again later.';
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.loading = true;
      this.facilityService.searchFacilities(this.searchQuery).subscribe({
        next: (facilities) => {
          this.facilities = facilities;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error searching facilities:', error);
          this.error = 'Failed to search facilities. Please try again later.';
          this.loading = false;
        }
      });
    } else {
      this.loadFacilities();
    }
  }
}
