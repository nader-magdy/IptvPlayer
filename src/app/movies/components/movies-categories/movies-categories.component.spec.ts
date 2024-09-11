import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCategoriesComponent } from './series-categories.component';

describe('SeriesCategoriesComponent', () => {
  let component: SeriesCategoriesComponent;
  let fixture: ComponentFixture<SeriesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
