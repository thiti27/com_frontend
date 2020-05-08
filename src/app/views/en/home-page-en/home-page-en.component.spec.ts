import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEnComponent } from './home-page-en.component';

describe('HomePageEnComponent', () => {
  let component: HomePageEnComponent;
  let fixture: ComponentFixture<HomePageEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
