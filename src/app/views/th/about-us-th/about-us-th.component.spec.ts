import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsThComponent } from './about-us-th.component';

describe('AboutUsThComponent', () => {
  let component: AboutUsThComponent;
  let fixture: ComponentFixture<AboutUsThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
