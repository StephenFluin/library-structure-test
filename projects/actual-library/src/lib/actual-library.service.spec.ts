import { TestBed } from '@angular/core/testing';

import { ActualLibraryService } from './actual-library.service';

describe('ActualLibraryService', () => {
  let service: ActualLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
