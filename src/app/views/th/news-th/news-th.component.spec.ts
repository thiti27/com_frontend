import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsThComponent } from './news-th.component';

describe('NewsThComponent', () => {
  let component: NewsThComponent;
  let fixture: ComponentFixture<NewsThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
