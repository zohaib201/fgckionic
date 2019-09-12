import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSurveyPage } from './single-survey.page';

describe('SingleSurveyPage', () => {
  let component: SingleSurveyPage;
  let fixture: ComponentFixture<SingleSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
