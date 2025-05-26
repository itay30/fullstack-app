import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, Item } from '../../../../core/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: Item | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/items']);
      return;
    }

    this.loadItem(id);
  }

  private loadItem(id: string) {
    this.loading = true;
    this.error = null;
    this.itemsService.getItemById(id).subscribe(
      (item) => {
        this.item = item;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading item:', error);
        this.error = 'Failed to load item details. Please try again later.';
        this.loading = false;
      }
    );
  }

  goBack() {
    this.router.navigate(['/items']);
  }
} 