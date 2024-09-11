import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MoviesCategoriesComponent } from './components/movies-categories/movies-categories.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [
    MoviesCategoriesComponent,
    MoviesListComponent,
    MovieInfoComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
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
export class MoviesModule { }
