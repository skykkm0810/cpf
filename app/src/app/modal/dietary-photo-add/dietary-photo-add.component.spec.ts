import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryPhotoAddComponent } from './dietary-photo-add.component';

describe('DietaryPhotoAddComponent', () => {
  let component: DietaryPhotoAddComponent;
  let fixture: ComponentFixture<DietaryPhotoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaryPhotoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryPhotoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
