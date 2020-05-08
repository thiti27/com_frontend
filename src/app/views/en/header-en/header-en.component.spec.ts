import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEnComponent } from './header-en.component';

describe('HeaderEnComponent', () => {
  let component: HeaderEnComponent;
  let fixture: ComponentFixture<HeaderEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
