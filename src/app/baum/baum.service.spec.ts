import { TestBed } from '@angular/core/testing';

import { BaumService } from './baum.service';

describe('BaumService', () => {
  let service: BaumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
