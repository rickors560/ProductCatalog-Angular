import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryByShortCodeComponent } from './delete-category-by-short-code.component';

describe('DeleteCategoryByShortCodeComponent', () => {
  let component: DeleteCategoryByShortCodeComponent;
  let fixture: ComponentFixture<DeleteCategoryByShortCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategoryByShortCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoryByShortCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
