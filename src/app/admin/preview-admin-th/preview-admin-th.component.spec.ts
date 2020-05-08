import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAdminThComponent } from './preview-admin-th.component';

describe('PreviewAdminThComponent', () => {
  let component: PreviewAdminThComponent;
  let fixture: ComponentFixture<PreviewAdminThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAdminThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAdminThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
