import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargePage } from './incharge.page';

describe('InchargePage', () => {
  let component: InchargePage;
  let fixture: ComponentFixture<InchargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchargePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
