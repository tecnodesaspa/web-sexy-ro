import { TestBed } from '@angular/core/testing';

import { PvpRankingService } from './pvp-ranking.service';

describe('PvpRankingService', () => {
  let service: PvpRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvpRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
