import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgchistoryPage } from './fgchistory.page';

describe('FgchistoryPage', () => {
  let component: FgchistoryPage;
  let fixture: ComponentFixture<FgchistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgchistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgchistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
