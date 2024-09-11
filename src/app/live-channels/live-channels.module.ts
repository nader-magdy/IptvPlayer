import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveChannelsCategoriesComponent } from './components/live-channels-categories/live-channels-categories.component';
import { LiveChannelsRoutingModule } from './live-channels-routing.module';
import { LiveChannelsCategoryStreamsComponent } from './components/live-channels-category-streams/live-channels-category-streams.component';
import { SafePipeModule } from 'safe-pipe';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule} from '@videogular/ngx-videogular/streaming';



@NgModule({
  declarations: [
    LiveChannelsCategoriesComponent,
    LiveChannelsCategoryStreamsComponent
  ],
  imports: [
    CommonModule,
    LiveChannelsRoutingModule,
    SafePipeModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule
  ]
})
export class LiveChannelsModule { }
