import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensListComponent } from './screens-list.component';

describe('ScreensListComponent', () => {
  let component: ScreensListComponent;
  let fixture: ComponentFixture<ScreensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
