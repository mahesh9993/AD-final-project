import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRawComponent } from './product-raw.component';

describe('ProductRawComponent', () => {
  let component: ProductRawComponent;
  let fixture: ComponentFixture<ProductRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
