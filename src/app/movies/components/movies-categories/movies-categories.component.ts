import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { MoviesService } from 'src/app/services/movies.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-categories',
  templateUrl: './movies-categories.component.html',
  styleUrls: ['./movies-categories.component.scss']
})
export class MoviesCategoriesComponent implements OnInit {

  categories$ : Observable<Category[]> | undefined;
  displayedColumns: string[] = ['category_id'];
  constructor(private readonly _moviesService : MoviesService) {
  }
  ngOnInit(): void {
    this.categories$ = this._moviesService.getCategories();
  }
}
