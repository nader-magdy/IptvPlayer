import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';
import { LiveChannelsService } from '../../../services/live-channels.service';

@Component({
  selector: 'app-live-channels-categories',
  templateUrl: './live-channels-categories.component.html',
  styleUrls: ['./live-channels-categories.component.scss']
})
export class LiveChannelsCategoriesComponent implements OnInit {
  
  categories$ : Observable<Category[]> | undefined;
  constructor(private liveChannelsService: LiveChannelsService) {
  }
  ngOnInit(): void {
    this.categories$ = this.liveChannelsService.getCategories();
  }
}
