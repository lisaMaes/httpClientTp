import { TestBed } from '@angular/core/testing';

import { GithubApiService } from './github-api.service';

describe('GithubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubApiService = TestBed.get(GithubApiService);
    expect(service).toBeTruthy();
  });

  this.getUser('nartawak')
    .subscribe((result:any) => {
      console.log('next');
      expect(result.login).toBe('nartawak')
    }, () => {
      console.log('error');
      fail("Do not fail")
    }, () => {
      console.log('complete');
    });
});
