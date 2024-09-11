import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Series } from 'src/app/models/series.model';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  series: Series[] = [];
  filteredSeries: Series[] = [];
  searchTerm: string = '';
  constructor(private seriesService: SeriesService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category-id'];
      this.seriesService.getSeries(categoryId).subscribe({
        next: (series) => { this.filteredSeries = this.series = series; }
      });
    });
  }
  onSearchChange() {
    this.filteredSeries = this.series.filter(s => s.name.search(new RegExp( this.searchTerm, 'i')) > -1);
  }
}
