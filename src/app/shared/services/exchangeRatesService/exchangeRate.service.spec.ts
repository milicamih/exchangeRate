import { TestBed } from '@angular/core/testing';

import { ExchangeRateService } from './exchangeRate.service';

describe('ExchangeRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeRateService = TestBed.get(ExchangeRateService);
    expect(service).toBeTruthy();
  });
});
