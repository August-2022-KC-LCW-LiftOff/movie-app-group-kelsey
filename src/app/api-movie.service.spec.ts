import { TestBed } from '@angular/core/testing';

import { ApiMovieService } from './api-movie.service';

describe('ApiMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMovieService = TestBed.get(ApiMovieService);
    expect(service).toBeTruthy();
  });
});
