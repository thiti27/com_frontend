import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageThComponent } from './home-page-th.component';

describe('HomePageThComponent', () => {
  let component: HomePageThComponent;
  let fixture: ComponentFixture<HomePageThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
