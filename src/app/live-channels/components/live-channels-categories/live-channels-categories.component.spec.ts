import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChannelsCategoriesComponent } from './live-channels-categories.component';

describe('LiveChannelsCategoriesComponent', () => {
  let component: LiveChannelsCategoriesComponent;
  let fixture: ComponentFixture<LiveChannelsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChannelsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveChannelsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
