import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaicelGroupComponent } from './daicel-group.component';

describe('DaicelGroupComponent', () => {
  let component: DaicelGroupComponent;
  let fixture: ComponentFixture<DaicelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaicelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaicelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
