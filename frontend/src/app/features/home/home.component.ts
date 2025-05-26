import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get<any>('/health').subscribe(
      (response) => {
        this.status = response
      },
      (error) => {
        console.error('Error fetching server status:', error)
      }
    );
  }
} 