import { TestBed, inject } from '@angular/core/testing';

import { GithubserviceService } from './githubservice.service';

describe('GithubserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubserviceService]
    });
  });

  it('should ...', inject([GithubserviceService], (service: GithubserviceService) => {
    expect(service).toBeTruthy();
  }));
});
