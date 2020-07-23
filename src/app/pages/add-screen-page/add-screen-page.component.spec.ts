import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenPageComponent } from './add-screen-page.component';

describe('AddScreenPageComponent', () => {
  let component: AddScreenPageComponent;
  let fixture: ComponentFixture<AddScreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScreenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
