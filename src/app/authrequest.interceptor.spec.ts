import { TestBed } from '@angular/core/testing';

import { AuthrequestInterceptor } from './authrequest.interceptor';

describe('AuthrequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthrequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthrequestInterceptor = TestBed.inject(AuthrequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
