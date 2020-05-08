import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewThComponent } from './preview-th.component';

describe('PreviewThComponent', () => {
  let component: PreviewThComponent;
  let fixture: ComponentFixture<PreviewThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
