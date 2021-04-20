import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoryByIdComponent } from './delete-category-by-id.component';

describe('DeleteCategoryByIdComponent', () => {
  let component: DeleteCategoryByIdComponent;
  let fixture: ComponentFixture<DeleteCategoryByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategoryByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
