import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchThComponent } from './search-th.component';

describe('SearchThComponent', () => {
  let component: SearchThComponent;
  let fixture: ComponentFixture<SearchThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
