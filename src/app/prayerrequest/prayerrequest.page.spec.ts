import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerrequestPage } from './prayerrequest.page';

describe('PrayerrequestPage', () => {
  let component: PrayerrequestPage;
  let fixture: ComponentFixture<PrayerrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerrequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
