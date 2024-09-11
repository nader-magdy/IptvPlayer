import { Component } from '@angular/core';
import { HostingService } from '../services/hosting.service';
import { Host } from '../models/host.model';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-host-selector',
  templateUrl: './host-selector.component.html',
  styleUrls: ['./host-selector.component.scss']
})
export class HostSelectorComponent {
  get hosts(): Host[] {
    return this._hostingService.hosts;
  };
  selectedHostName: string = this._hostingService.host.name;
  /**
   *
   */
  constructor(private readonly _hostingService: HostingService) {
  }
  changeHost() {
    this._hostingService.changeHost(this.selectedHostName);
  }
}
