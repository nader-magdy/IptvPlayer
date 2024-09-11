import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesCategoriesComponent } from './components/series-categories/series-categories.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesInfoComponent } from './components/series-info/series-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';



@NgModule({
  declarations: [
    SeriesCategoriesComponent,
    SeriesListComponent,
    SeriesInfoComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    SafePipeModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class SeriesModule { }
