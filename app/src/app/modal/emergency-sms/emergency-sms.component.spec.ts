import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySmsComponent } from './emergency-sms.component';

describe('EmergencySmsComponent', () => {
  let component: EmergencySmsComponent;
  let fixture: ComponentFixture<EmergencySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencySmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
