import { TestBed } from '@angular/core/testing';

import { SocietesArchitectureService } from './societes-architecture.service';

describe('SocietesArchitectureService', () => {
  let service: SocietesArchitectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietesArchitectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
