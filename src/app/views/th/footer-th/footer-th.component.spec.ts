import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterThComponent } from './footer-th.component';

describe('FooterThComponent', () => {
  let component: FooterThComponent;
  let fixture: ComponentFixture<FooterThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
