import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewEnComponent } from './preview-en.component';

describe('PreviewEnComponent', () => {
  let component: PreviewEnComponent;
  let fixture: ComponentFixture<PreviewEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
