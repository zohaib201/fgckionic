import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsSurveysPage } from './polls-surveys.page';

describe('PollsSurveysPage', () => {
  let component: PollsSurveysPage;
  let fixture: ComponentFixture<PollsSurveysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsSurveysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsSurveysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
