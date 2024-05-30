import { TestBed } from '@angular/core/testing';

import { BowwService } from './boww.service';

describe('BowwService', () => {
  let service: BowwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
