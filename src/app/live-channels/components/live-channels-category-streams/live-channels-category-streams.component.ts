import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Stream } from 'src/app/models/stream.model';
import { HostingService } from 'src/app/services/hosting.service';
import { LiveChannelsService } from 'src/app/services/live-channels.service';

@Component({
  selector: 'app-live-channels-category-streams',
  templateUrl: './live-channels-category-streams.component.html',
  styleUrls: ['./live-channels-category-streams.component.scss']
})
export class LiveChannelsCategoryStreamsComponent implements OnInit {
  streams$: Observable<Stream[]> | undefined;
  playerSource : string = '';
  constructor(private liveChannelsService: LiveChannelsService,
    private readonly _hostingService : HostingService,
    private route: ActivatedRoute) {
      this.playerSource = this._hostingService.getStreamSourceBase();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category-id'];
      this.streams$ = this.liveChannelsService.getStreams(categoryId);
    });
  }
}
