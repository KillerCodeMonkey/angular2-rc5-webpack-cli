/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ShoutPipePipe } from './shout-pipe.pipe';

describe('Pipe: ShoutPipe', () => {
  it('create an instance', () => {
    let pipe = new ShoutPipePipe();
    expect(pipe).toBeTruthy();
  });
});
