import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtimingPage } from './ourtiming.page';

describe('OurtimingPage', () => {
  let component: OurtimingPage;
  let fixture: ComponentFixture<OurtimingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurtimingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurtimingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
