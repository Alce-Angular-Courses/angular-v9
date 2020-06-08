import { TestBed } from '@angular/core/testing';

import { GoogleLibrosService } from './google-libros.service';

describe('GoogleLibrosService', () => {
  let service: GoogleLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
