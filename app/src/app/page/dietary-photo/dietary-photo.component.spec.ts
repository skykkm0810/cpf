import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryPhotoComponent } from './dietary-photo.component';

describe('DietaryPhotoComponent', () => {
  let component: DietaryPhotoComponent;
  let fixture: ComponentFixture<DietaryPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaryPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
