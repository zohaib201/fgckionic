import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForGuestPage } from './home-for-guest.page';

describe('HomeForGuestPage', () => {
  let component: HomeForGuestPage;
  let fixture: ComponentFixture<HomeForGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForGuestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
