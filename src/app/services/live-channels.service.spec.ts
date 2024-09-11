import { TestBed } from '@angular/core/testing';

import { LiveChannelsService } from './live-channels.service';

describe('LiveChannelsService', () => {
  let service: LiveChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveChannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
