import { TestBed } from '@angular/core/testing';

import { ProoductService } from './product.service';

describe('ProoductService', () => {
  let service: ProoductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProoductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
