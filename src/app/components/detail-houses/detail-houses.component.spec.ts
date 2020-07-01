import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHousesComponent } from './detail-houses.component';

describe('DetailHousesComponent', () => {
  let component: DetailHousesComponent;
  let fixture: ComponentFixture<DetailHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
