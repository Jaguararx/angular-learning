import { TestBed } from '@angular/core/testing';

import { playerDetailGuard } from './player-detail.guard';

describe('playerDetailGuard', () => {
  let guard: playerDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(playerDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
