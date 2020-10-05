import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingUsUkMvComponent } from './trending-us-uk-mv.component';

describe('TrendingUsUkMvComponent', () => {
  let component: TrendingUsUkMvComponent;
  let fixture: ComponentFixture<TrendingUsUkMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingUsUkMvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingUsUkMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
