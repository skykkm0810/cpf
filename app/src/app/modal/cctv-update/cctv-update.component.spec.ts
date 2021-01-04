import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvUpdateComponent } from './cctv-update.component';

describe('CctvUpdateComponent', () => {
  let component: CctvUpdateComponent;
  let fixture: ComponentFixture<CctvUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
