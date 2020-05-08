import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrThComponent } from './csr-th.component';

describe('CsrThComponent', () => {
  let component: CsrThComponent;
  let fixture: ComponentFixture<CsrThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsrThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
