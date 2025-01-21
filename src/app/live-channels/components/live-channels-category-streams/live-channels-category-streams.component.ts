import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  playerSource: string = '';
  playlistUrl: SafeResourceUrl = '';
  constructor(private liveChannelsService: LiveChannelsService,
    private readonly _hostingService: HostingService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute) {
    this.playerSource = this._hostingService.getStreamSourceBase();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category-id'];
      this.streams$ = this.liveChannelsService.getStreams(categoryId);
      this.streams$.subscribe((streams) => {
        this.buildPlaylist(streams);
      })
    });
  }
  buildPlaylist(streams: Stream[]) {
    const data =  '#EXTM3U' + streams.map(s => this.streamToM3U(s)).join('');
    const blob = new Blob([data], { type: 'application/vnd' });

    this.playlistUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
  streamToM3U(stream: Stream) {
    return `
    #EXTINF:0,${stream.stream_id} - ${stream.name}
    #EXTVLCOPT:network-caching=1000
    ${this.playerSource}/${stream.stream_id}`
  }
}
