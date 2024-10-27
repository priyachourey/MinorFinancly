import { TestBed } from '@angular/core/testing';

import { ExtractokenService } from './service/extractoken.service';

describe('ExtractokenService', () => {
  let service: ExtractokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
