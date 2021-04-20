import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductByShortCodeComponent } from './delete-product-by-short-code.component';

describe('DeleteProductByShortCodeComponent', () => {
  let component: DeleteProductByShortCodeComponent;
  let fixture: ComponentFixture<DeleteProductByShortCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductByShortCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductByShortCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
