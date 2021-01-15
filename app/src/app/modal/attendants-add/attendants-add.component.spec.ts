import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantsAddComponent } from './attendants-add.component';

describe('AttendantsAddComponent', () => {
  let component: AttendantsAddComponent;
  let fixture: ComponentFixture<AttendantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendantsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
