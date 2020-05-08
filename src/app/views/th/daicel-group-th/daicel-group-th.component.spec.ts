import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaicelGroupThComponent } from './daicel-group-th.component';

describe('DaicelGroupThComponent', () => {
  let component: DaicelGroupThComponent;
  let fixture: ComponentFixture<DaicelGroupThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaicelGroupThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaicelGroupThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
