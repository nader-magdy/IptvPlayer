import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from "@angular/platform-browser";
import { VgApiService } from '@videogular/ngx-videogular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieInfo } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieInfo$: Observable<MovieInfo> | undefined;
  movie: MovieInfo | undefined;
  videoSources: string[] = [];
  displayedColumns: string[] = ['episode_num', 'info.duration', 'title', 'id', 'info.plot'];
  playerApi: VgApiService | undefined;
  constructor(private readonly _moviesService: MoviesService, private route: ActivatedRoute, private titleService: Title) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const movieId = params['movie-id'];
      this.movieInfo$ = this._moviesService.getMovieInfo(movieId);
      this.movieInfo$.subscribe({
        next: (moviesInfo) => {
          this.movie = moviesInfo;
          this.titleService.setTitle(moviesInfo.movie_data.name);
          this.play();
        }
      })
    });
  }

  getMovieLink(streamId: number, extension: string) {
    return this._moviesService.getMovieLink(streamId, extension);
  }
  play() {
    if (this.movie) {
      this.videoSources = [this.getMovieLink(this.movie.movie_data.stream_id, this.movie?.movie_data.container_extension)];
    }
  }
  onPlayerReady(api: VgApiService) {
    this.playerApi = api;
    this.playerApi.getDefaultMedia().subscriptions.pause.subscribe({
      next: () => {
        this.playerApi && console.log(this.playerApi.currentTime);
      }
    });

  }
}
