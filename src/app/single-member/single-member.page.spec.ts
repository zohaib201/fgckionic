import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMemberPage } from './single-member.page';

describe('SingleMemberPage', () => {
  let component: SingleMemberPage;
  let fixture: ComponentFixture<SingleMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
