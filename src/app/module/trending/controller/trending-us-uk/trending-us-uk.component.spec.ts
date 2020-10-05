import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingUsUkComponent } from './trending-us-uk.component';

describe('TrendingUsUkComponent', () => {
  let component: TrendingUsUkComponent;
  let fixture: ComponentFixture<TrendingUsUkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingUsUkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingUsUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
