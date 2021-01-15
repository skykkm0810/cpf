import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryAddComponent } from './dietary-add.component';

describe('DietaryAddComponent', () => {
  let component: DietaryAddComponent;
  let fixture: ComponentFixture<DietaryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietaryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
