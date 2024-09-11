import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-categories',
  templateUrl: './series-categories.component.html',
  styleUrls: ['./series-categories.component.scss']
})
export class SeriesCategoriesComponent implements OnInit {

  categories$ : Observable<Category[]> | undefined;
  displayedColumns: string[] = ['category_id'];
  constructor(private seriesService : SeriesService) {
  }
  ngOnInit(): void {
    this.categories$ = this.seriesService.getCategories();
  }
}
