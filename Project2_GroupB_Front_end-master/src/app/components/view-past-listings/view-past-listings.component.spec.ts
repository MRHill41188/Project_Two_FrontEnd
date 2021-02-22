import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastListingsComponent } from './view-past-listings.component';

describe('ViewPastListingsComponent', () => {
  let component: ViewPastListingsComponent;
  let fixture: ComponentFixture<ViewPastListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
