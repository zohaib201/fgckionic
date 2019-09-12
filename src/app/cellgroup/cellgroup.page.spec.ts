import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellgroupPage } from './cellgroup.page';

describe('CellgroupPage', () => {
  let component: CellgroupPage;
  let fixture: ComponentFixture<CellgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellgroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
