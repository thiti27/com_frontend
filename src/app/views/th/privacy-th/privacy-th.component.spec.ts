import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyThComponent } from './privacy-th.component';

describe('PrivacyThComponent', () => {
  let component: PrivacyThComponent;
  let fixture: ComponentFixture<PrivacyThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
