import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsThComponent } from './contact-us-th.component';

describe('ContactUsThComponent', () => {
  let component: ContactUsThComponent;
  let fixture: ComponentFixture<ContactUsThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
