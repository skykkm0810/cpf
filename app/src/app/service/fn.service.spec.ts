import { TestBed } from '@angular/core/testing';

import { FnService } from './fn.service';

describe('FnService', () => {
  let service: FnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
