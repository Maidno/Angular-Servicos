import { TestBed, inject } from '@angular/core/testing';

import { LogeService } from './loge.service';

describe('LogeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogeService]
    });
  });

  it('should be created', inject([LogeService], (service: LogeService) => {
    expect(service).toBeTruthy();
  }));
});
