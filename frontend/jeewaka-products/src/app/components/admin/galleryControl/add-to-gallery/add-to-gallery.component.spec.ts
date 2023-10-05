import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToGalleryComponent } from './add-to-gallery.component';

describe('AddToGalleryComponent', () => {
  let component: AddToGalleryComponent;
  let fixture: ComponentFixture<AddToGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
