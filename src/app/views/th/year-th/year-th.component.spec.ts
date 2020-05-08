import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearThComponent } from './year-th.component';

describe('YearThComponent', () => {
  let component: YearThComponent;
  let fixture: ComponentFixture<YearThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
