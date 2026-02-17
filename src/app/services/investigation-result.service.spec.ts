import { TestBed } from '@angular/core/testing';

import { InvestigationResultService } from './investigation-result.service';

describe('InvestigationResultServiceService', () => {
  let service: InvestigationResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestigationResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
