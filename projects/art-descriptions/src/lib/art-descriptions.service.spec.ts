import { TestBed } from '@angular/core/testing';

import { ArtDescriptionsService } from './art-descriptions.service';

describe('ArtDescriptionsService', () => {
  let service: ArtDescriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtDescriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
