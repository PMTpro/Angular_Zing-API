import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingWeekMvComponent } from './trending-week-mv.component';

describe('TrendingWeekMvComponent', () => {
  let component: TrendingWeekMvComponent;
  let fixture: ComponentFixture<TrendingWeekMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingWeekMvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingWeekMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
