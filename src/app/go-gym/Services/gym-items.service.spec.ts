import { TestBed } from '@angular/core/testing';

import { GymItemsService } from './gym-items.service';

describe('GymItemsService', () => {
  let service: GymItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
