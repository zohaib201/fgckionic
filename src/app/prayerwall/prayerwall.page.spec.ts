import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerwallPage } from './prayerwall.page';

describe('PrayerwallPage', () => {
  let component: PrayerwallPage;
  let fixture: ComponentFixture<PrayerwallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerwallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerwallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
