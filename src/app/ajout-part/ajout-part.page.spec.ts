import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPartPage } from './ajout-part.page';

describe('AjoutPartPage', () => {
  let component: AjoutPartPage;
  let fixture: ComponentFixture<AjoutPartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
