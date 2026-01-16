import { TestBed } from '@angular/core/testing';

import { InvestigationResultServiceService } from './investigation-result-service.service';

describe('InvestigationResultServiceService', () => {
  let service: InvestigationResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestigationResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
