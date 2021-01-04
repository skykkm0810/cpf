import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorContactComponent } from './senior-contact.component';

describe('SeniorContactComponent', () => {
  let component: SeniorContactComponent;
  let fixture: ComponentFixture<SeniorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
