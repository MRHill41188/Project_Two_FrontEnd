import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPastApplicationsComponent } from './view-past-applications.component';

describe('ViewPastApplicationsComponent', () => {
  let component: ViewPastApplicationsComponent;
  let fixture: ComponentFixture<ViewPastApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPastApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPastApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
