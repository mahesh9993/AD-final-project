import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPowderComponent } from './product-powder.component';

describe('ProductPowderComponent', () => {
  let component: ProductPowderComponent;
  let fixture: ComponentFixture<ProductPowderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPowderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPowderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
