import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoterComponent } from './addfoter.component';

describe('AddfoterComponent', () => {
  let component: AddfoterComponent;
  let fixture: ComponentFixture<AddfoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
