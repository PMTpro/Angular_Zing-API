import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMvComponent } from './trending-mv.component';

describe('TrendingMvComponent', () => {
  let component: TrendingMvComponent;
  let fixture: ComponentFixture<TrendingMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
