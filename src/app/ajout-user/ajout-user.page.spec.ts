import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUserPage } from './ajout-user.page';

describe('AjoutUserPage', () => {
  let component: AjoutUserPage;
  let fixture: ComponentFixture<AjoutUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
