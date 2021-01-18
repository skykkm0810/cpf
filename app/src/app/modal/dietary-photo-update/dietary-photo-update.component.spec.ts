import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryPhotoUpdateComponent } from './dietary-photo-update.component';

describe('DietaryPhotoUpdateComponent', () => {
  let component: DietaryPhotoUpdateComponent;
  let fixture: ComponentFixture<DietaryPhotoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaryPhotoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryPhotoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
