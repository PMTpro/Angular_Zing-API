import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingKPopMvComponent } from './trending-k-pop-mv.component';

describe('TrendingKPopMvComponent', () => {
  let component: TrendingKPopMvComponent;
  let fixture: ComponentFixture<TrendingKPopMvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingKPopMvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingKPopMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
