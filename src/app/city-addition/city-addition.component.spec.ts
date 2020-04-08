import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAdditionComponent } from './city-addition.component';

describe('CityAdditionComponent', () => {
  let component: CityAdditionComponent;
  let fixture: ComponentFixture<CityAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
