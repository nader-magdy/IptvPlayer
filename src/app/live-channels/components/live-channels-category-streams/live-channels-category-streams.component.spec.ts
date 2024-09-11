import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChannelsCategoryStreamsComponent } from './live-channels-category-streams.component';

describe('LiveChannelsCategoryStreamsComponent', () => {
  let component: LiveChannelsCategoryStreamsComponent;
  let fixture: ComponentFixture<LiveChannelsCategoryStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChannelsCategoryStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveChannelsCategoryStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
