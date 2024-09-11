import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode, SeriesInfo } from 'src/app/models/series-info.model';
import { SeriesService } from 'src/app/services/series.service';
import {Title} from "@angular/platform-browser";
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss']
})
export class SeriesInfoComponent implements OnInit {
  seriesInfo$: Observable<SeriesInfo> | undefined;
  videoSources : string[] = [];
  displayedColumns: string[] = ['episode_num', 'info.duration', 'title', 'id', 'info.plot'];
  selectedEpisode : Episode | undefined;
  playerApi : VgApiService | undefined;
  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private titleService:Title) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const seriesId = params['series-id'];
      this.seriesInfo$ = this.seriesService.getSeriesInfo(seriesId);
      this.seriesInfo$.subscribe({
        next: (series) =>this.titleService.setTitle(series.info.name)
      })
    });
  }

  getEpisodeLink(episodeId: string, extension: string) {
    return this.seriesService.getEpisodeLink(episodeId, extension);
  }
  play(episode: Episode) {
    this.selectedEpisode = episode;
    this.videoSources = [this.getEpisodeLink(episode.id, episode.container_extension)];
  }
  onPlayerReady(api : VgApiService){
    this.playerApi = api;
    this.playerApi.getDefaultMedia().subscriptions.pause.subscribe({
      next: ()=> {
        this.playerApi && console.log(this.playerApi.currentTime);
      }
    });
    
  }
}
