import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  constructor(private readonly _moviesService: MoviesService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category-id'];
      this._moviesService.getMovies(categoryId).subscribe({
        next: (movies) => { this.filteredMovies = this.movies = movies; }
      });
    });
  }
  onSearchChange() {
    this.filteredMovies = this.movies.filter(s => s.name.search(new RegExp( this.searchTerm, 'i')) > -1);
  }
}
