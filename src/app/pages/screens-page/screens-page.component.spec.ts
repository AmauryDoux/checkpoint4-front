import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensPageComponent } from './screens-page.component';

describe('ScreensPageComponent', () => {
  let component: ScreensPageComponent;
  let fixture: ComponentFixture<ScreensPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
