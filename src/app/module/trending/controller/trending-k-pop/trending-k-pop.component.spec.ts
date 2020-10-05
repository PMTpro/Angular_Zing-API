import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingKPopComponent } from './trending-k-pop.component';

describe('TrendingKPopComponent', () => {
  let component: TrendingKPopComponent;
  let fixture: ComponentFixture<TrendingKPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingKPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingKPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
