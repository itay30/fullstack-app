import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../../../../core/services/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  loading = true;
  error: string | null = null;
  searchQuery = '';

  constructor(private itemsService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.loading = true;
    this.error = null;
    this.itemsService.getAllItems().subscribe(
      (items) => {
        this.items = items;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading items:', error);
        this.error = 'Failed to load items. Please try again later.';
        this.loading = false;
      }
    );
  }

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.loadItems();
      return;
    }

    this.loading = true;
    this.error = null;
    this.itemsService.searchItems(this.searchQuery).subscribe(
      (items) => {
        this.items = items;
        this.loading = false;
      },
      (error) => {
        console.error('Error searching items:', error);
        this.error = 'Failed to search items. Please try again later.';
        this.loading = false;
      }
    );
  }
} 