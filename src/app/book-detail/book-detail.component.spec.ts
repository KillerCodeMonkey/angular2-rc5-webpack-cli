/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookDetailComponent } from './book-detail.component';

describe('Component: BookDetail', () => {
  it('should create an instance', () => {
    let component = new BookDetailComponent();
    expect(component).toBeTruthy();
  });
});
