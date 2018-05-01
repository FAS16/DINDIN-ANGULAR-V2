import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedRestaurantsComponent } from './liked-restaurants.component';

describe('LikedRestaurantsComponent', () => {
  let component: LikedRestaurantsComponent;
  let fixture: ComponentFixture<LikedRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
