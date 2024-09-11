import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { Series } from '../models/series.model';
import { SeriesInfo } from '../models/series-info.model';
import { HostingService } from './hosting.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  apiUrl: string = '';
  constructor(private http: HttpClient, private _hosting: HostingService) {
    this.apiUrl = this._hosting.buildUrl('player_api.php');
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}&action=get_series_categories`);
  }
  getSeries(categoryId: number): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.apiUrl}&action=get_series&category_id=${categoryId}`);
  }
  getSeriesInfo(seriesId: number): Observable<SeriesInfo> {
    return this.http.get<SeriesInfo>(`${this.apiUrl}&action=get_series_info&series_id=${seriesId}`);
  }
  getSeriesSourceBase(): string {
    return this._hosting.getSourceBase('series');
  }
  getEpisodeLink(episodeId: string, extension: string) {
    return `${this.getSeriesSourceBase()}/${episodeId}.${extension}`
  }
}
