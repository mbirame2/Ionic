import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidePage } from './vide.page';

describe('VidePage', () => {
  let component: VidePage;
  let fixture: ComponentFixture<VidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
