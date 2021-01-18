import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUpdateComponent } from './videos-update.component';

describe('VideosUpdateComponent', () => {
  let component: VideosUpdateComponent;
  let fixture: ComponentFixture<VideosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
