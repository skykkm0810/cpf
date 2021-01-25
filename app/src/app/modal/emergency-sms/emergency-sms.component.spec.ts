import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySMSComponent } from './emergency-sms.component';

describe('EmergencySMSComponent', () => {
  let component: EmergencySMSComponent;
  let fixture: ComponentFixture<EmergencySMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencySMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencySMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
