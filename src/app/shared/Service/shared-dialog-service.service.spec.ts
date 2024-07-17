import { TestBed } from '@angular/core/testing';

import { SharedDialogServiceService } from './shared-dialog-service.service';

describe('SharedDialogServiceService', () => {
  let service: SharedDialogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDialogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
