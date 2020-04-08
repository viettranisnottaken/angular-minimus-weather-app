import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFollowComponent } from './city-follow.component';

describe('CityFollowComponent', () => {
  let component: CityFollowComponent;
  let fixture: ComponentFixture<CityFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
