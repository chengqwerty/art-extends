import { TestBed } from '@angular/core/testing';

import { ArtExtendsService } from './art-extends.service';

describe('ArtExtendsService', () => {
  let service: ArtExtendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtExtendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
