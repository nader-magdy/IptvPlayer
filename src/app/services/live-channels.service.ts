import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { Stream } from '../models/stream.model';
import { HostingService } from './hosting.service';

@Injectable({
  providedIn: 'root'
})
export class LiveChannelsService {
  apiUrl: string = '';
  constructor(private http: HttpClient, private _hosting: HostingService) {
    this.apiUrl = this._hosting.buildUrl('player_api.php');
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}&action=get_live_categories`);
  }
  getStreams(categoryId: number): Observable<Stream[]> {
    return this.http.get<Stream[]>(`${this.apiUrl}&action=get_live_streams&category_id=${categoryId}`);
  }

}
