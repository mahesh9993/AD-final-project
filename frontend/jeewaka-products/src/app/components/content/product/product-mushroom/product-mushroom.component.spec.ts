import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMushroomComponent } from './product-mushroom.component';

describe('ProductMushroomComponent', () => {
  let component: ProductMushroomComponent;
  let fixture: ComponentFixture<ProductMushroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMushroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMushroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
