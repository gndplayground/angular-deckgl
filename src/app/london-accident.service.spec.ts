import { TestBed, inject } from '@angular/core/testing';

import { LondonAccidentService } from './london-accident.service';

describe('LondonAccidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LondonAccidentService]
    });
  });

  it('should be created', inject([LondonAccidentService], (service: LondonAccidentService) => {
    expect(service).toBeTruthy();
  }));
});
