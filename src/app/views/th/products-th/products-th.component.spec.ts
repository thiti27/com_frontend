import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsThComponent } from './products-th.component';

describe('ProductsThComponent', () => {
  let component: ProductsThComponent;
  let fixture: ComponentFixture<ProductsThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
