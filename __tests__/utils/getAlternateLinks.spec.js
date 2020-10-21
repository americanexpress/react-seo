/*
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

import getAlternateLinks from '../../src/utils/getAlternateLinks';

describe('getAlternateLinks', () => {
  it('should add the rel: alternate key value pair to entires', () => {
    const mockData = [
      { hreflang: 'en-CA', href: 'https://example.com/en-CA' },
      { hreflang: 'fr-CA', href: 'https://example.com/fr-CA' },
    ];

    expect(getAlternateLinks(mockData)).toEqual([
      { rel: 'alternate', hreflang: 'en-CA', href: 'https://example.com/en-CA' },
      { rel: 'alternate', hreflang: 'fr-CA', href: 'https://example.com/fr-CA' },
    ]);
  });

  it('should return an empty array if incorrect inputs are supplied', () => {
    expect(getAlternateLinks(null)).toEqual([]);
    expect(getAlternateLinks(undefined)).toEqual([]);
    expect(getAlternateLinks('string')).toEqual([]);
    expect(getAlternateLinks(1)).toEqual([]);
    expect(getAlternateLinks({ hreflang: 'en-CA', href: 'https://example.com/en-CA' })).toEqual([]);
  });

  it('should return an empty array if an empty array is supplied', () => {
    expect(getAlternateLinks([])).toEqual([]);
  });
});
