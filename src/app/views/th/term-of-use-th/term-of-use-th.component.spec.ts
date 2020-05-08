import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOfUseThComponent } from './term-of-use-th.component';

describe('TermOfUseThComponent', () => {
  let component: TermOfUseThComponent;
  let fixture: ComponentFixture<TermOfUseThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermOfUseThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermOfUseThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
