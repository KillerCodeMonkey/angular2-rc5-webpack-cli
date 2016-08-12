/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BookDataService } from './book-data.service';

describe('Service: BookData', () => {
  beforeEach(() => {
    addProviders([BookDataService]);
  });

  it('should ...',
    inject([BookDataService],
      (service: BookDataService) => {
        expect(service).toBeTruthy();
      }));
});
