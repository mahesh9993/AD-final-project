import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDehydrateComponent } from './product-dehydrate.component';

describe('ProductDehydrateComponent', () => {
  let component: ProductDehydrateComponent;
  let fixture: ComponentFixture<ProductDehydrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDehydrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDehydrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
