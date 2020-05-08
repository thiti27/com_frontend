import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThComponent } from './header-th.component';

describe('HeaderThComponent', () => {
  let component: HeaderThComponent;
  let fixture: ComponentFixture<HeaderThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
