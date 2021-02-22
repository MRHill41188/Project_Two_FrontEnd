import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApplicantsComponent } from './review-applicants.component';

describe('ReviewApplicantsComponent', () => {
  let component: ReviewApplicantsComponent;
  let fixture: ComponentFixture<ReviewApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
