import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'live-channels',
    loadChildren: () => import('./live-channels/live-channels.module').then((m) => m.LiveChannelsModule),
  },{
    path: 'series',
    loadChildren: () => import('./series/series.module').then((m) => m.SeriesModule),
  },{
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '', component: DashboardComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
