import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFamilyComponent } from './contact-family.component';

describe('ContactFamilyComponent', () => {
  let component: ContactFamilyComponent;
  let fixture: ComponentFixture<ContactFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
