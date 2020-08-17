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

import getTwitterCardTags from '../../src/utils/getTwitterCardTags';

global.console = {
  warn: jest.fn(),
};

describe('getTwitterCardTags', () => {
  describe('summary card', () => {
    it('should provide the tags for a summary card', () => {
      const config = {
        card: 'summary',
        site: '@Example',
        title: 'Some title',
        description: 'Some description',
        image: {
          src: 'http://example.com/ogp.jpg',
          alt: 'A shiny red apple with a bite taken out',
        },
        irrelevantProperty: 'foo',
      };

      expect(getTwitterCardTags(config)).toEqual([
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@Example' },
        { name: 'twitter:title', content: 'Some title' },
        { name: 'twitter:description', content: 'Some description' },
        { name: 'twitter:image', content: 'http://example.com/ogp.jpg' },
        { name: 'twitter:image:alt', content: 'A shiny red apple with a bite taken out' },
      ]);
    });
  });

  describe('summary with large image card', () => {
    it('should provide the tags for a summary with large image card', () => {
      const config = {
        card: 'summary_large_image',
        site: '@Example',
        title: 'Some title',
        description: 'Some description',
        image: {
          src: 'http://example.com/ogp.jpg',
          alt: 'A shiny red apple with a bite taken out',
        },
        irrelevantProperty: 'foo',
      };

      expect(getTwitterCardTags(config)).toEqual([
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Example' },
        { name: 'twitter:title', content: 'Some title' },
        { name: 'twitter:description', content: 'Some description' },
        { name: 'twitter:image', content: 'http://example.com/ogp.jpg' },
        { name: 'twitter:image:alt', content: 'A shiny red apple with a bite taken out' },
      ]);
    });

    it('should warn about deprecation of summary_with_large_image', () => {
      const config = {
        card: 'summary_with_large_image',
        site: '@Example',
        title: 'Some title',
        description: 'Some description',
        image: {
          src: 'http://example.com/ogp.jpg',
          alt: 'A shiny red apple with a bite taken out',
        },
        irrelevantProperty: 'foo',
      };

      expect(getTwitterCardTags(config)).toEqual([
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Example' },
        { name: 'twitter:title', content: 'Some title' },
        { name: 'twitter:description', content: 'Some description' },
        { name: 'twitter:image', content: 'http://example.com/ogp.jpg' },
        { name: 'twitter:image:alt', content: 'A shiny red apple with a bite taken out' },
      ]);

      expect(global.console.warn).toHaveBeenCalled();
    });
  });

  describe('player card', () => {
    it('should provide the tags for a player card', () => {
      const config = {
        card: 'player',
        site: '@Example',
        title: 'Some title',
        description: 'Some description',
        player: {
          src: 'http://example.com/movie.swf',
          width: 500,
          height: 300,
        },
        irrelevantProperty: 'foo',
      };

      expect(getTwitterCardTags(config)).toEqual([
        { name: 'twitter:card', content: 'player' },
        { name: 'twitter:site', content: '@Example' },
        { name: 'twitter:title', content: 'Some title' },
        { name: 'twitter:description', content: 'Some description' },
        { name: 'twitter:player', content: 'http://example.com/movie.swf' },
        { name: 'twitter:player:width', content: 500 },
        { name: 'twitter:player:height', content: 300 },
      ]);
    });
  });

  describe('app card', () => {
    it('should provide the tags for an app card', () => {
      const config = {
        card: 'app',
        site: '@Example',
        title: 'Some title',
        description: 'Some description',
        app: {
          country: 'CA',
          iphone: {
            id: '929750075',
            url: 'example://app/5149e249222f9e600a7540ef',
            name: 'Example App',
          },
          ipad: {
            id: '929750075',
            url: 'example://app/5149e249222f9e600a7540ef',
            name: 'Example App',
          },
          googlePlay: {
            id: 'io.examples.example',
            url: 'http://example.examples.io/5149e249222f9e600a7540ef',
            name: 'Example App',
          },
        },
      };

      expect(getTwitterCardTags(config)).toEqual([
        { name: 'twitter:card', content: 'app' },
        { name: 'twitter:site', content: '@Example' },
        { name: 'twitter:title', content: 'Some title' },
        { name: 'twitter:description', content: 'Some description' },
        { name: 'twitter:app:country', content: 'CA' },
        { name: 'twitter:app:id:iphone', content: '929750075' },
        { name: 'twitter:app:url:iphone', content: 'example://app/5149e249222f9e600a7540ef' },
        { name: 'twitter:app:name:iphone', content: 'Example App' },
        { name: 'twitter:app:id:ipad', content: '929750075' },
        { name: 'twitter:app:url:ipad', content: 'example://app/5149e249222f9e600a7540ef' },
        { name: 'twitter:app:name:ipad', content: 'Example App' },
        { name: 'twitter:app:id:googleplay', content: 'io.examples.example' },
        { name: 'twitter:app:url:googleplay', content: 'http://example.examples.io/5149e249222f9e600a7540ef' },
        { name: 'twitter:app:name:googleplay', content: 'Example App' },
      ]);
    });
  });

  it('should throw if the card type is not supported', () => {
    const config = {
      card: 'foo',
    };

    expect(() => getTwitterCardTags(config)).toThrow();
  });
});
