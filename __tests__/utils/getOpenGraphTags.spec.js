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

import getOpenGraphTags from '../../src/utils/getOpenGraphTags';

describe('getOpenGraphTags', () => {
  it('should provide the basic tags', () => {
    const config = {
      title: 'Some title',
      url: 'http://example.com/',
      type: 'website',
    };

    expect(getOpenGraphTags(config)).toEqual([
      { property: 'og:title', content: 'Some title' },
      { property: 'og:url', content: 'http://example.com/' },
      { property: 'og:type', content: 'website' },
    ]);
  });

  it('should provide the optional tags', () => {
    const config = {
      title: 'Some title',
      url: 'http://example.com/',
      type: 'website',
      description: 'Some description',
      determiner: 'the',
      locale: 'en-US',
      localeAlternate: 'en-GB',
      siteName: 'Example',
    };

    expect(getOpenGraphTags(config)).toEqual([
      { property: 'og:title', content: 'Some title' },
      { property: 'og:url', content: 'http://example.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Some description' },
      { property: 'og:determiner', content: 'the' },
      { property: 'og:locale', content: 'en-US' },
      { property: 'og:locale:alternate', content: 'en-GB' },
      { property: 'og:site_name', content: 'Example' },
    ]);
  });

  describe('when an image is defined', () => {
    it('should provide the basic image tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        image: {
          src: 'http://example.com/ogp.jpg',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'http://example.com/ogp.jpg' },
      ]);
    });

    it('should set the secure_url tag', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        image: {
          src: 'https://example.com/ogp.jpg',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://example.com/ogp.jpg' },
        { property: 'og:image:secure_url', content: 'https://example.com/ogp.jpg' },
      ]);
    });

    it('should provide all of the image tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        image: {
          src: 'http://example.com/ogp.jpg',
          secureUrl: 'https://secure.example.com/ogp.jpg',
          type: 'image/jpeg',
          width: 500,
          height: 300,
          alt: 'A shiny red apple with a bite taken out',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'http://example.com/ogp.jpg' },
        { property: 'og:image:secure_url', content: 'https://secure.example.com/ogp.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: 500 },
        { property: 'og:image:height', content: 300 },
        { property: 'og:image:alt', content: 'A shiny red apple with a bite taken out' },
      ]);
    });
  });

  describe('when a video is defined', () => {
    it('should provide the basic video tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        video: {
          src: 'http://example.com/movie.swf',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:video', content: 'http://example.com/movie.swf' },
      ]);
    });

    it('should set the secure_url tag', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        video: {
          src: 'https://example.com/movie.swf',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:video', content: 'https://example.com/movie.swf' },
        { property: 'og:video:secure_url', content: 'https://example.com/movie.swf' },
      ]);
    });

    it('should provide all of the video tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        video: {
          src: 'http://example.com/movie.swf',
          secureUrl: 'https://secure.example.com/movie.swf',
          type: 'application/x-shockwave-flash',
          width: 500,
          height: 300,
          alt: 'A shiny red apple with a bite taken out',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:video', content: 'http://example.com/movie.swf' },
        { property: 'og:video:secure_url', content: 'https://secure.example.com/movie.swf' },
        { property: 'og:video:type', content: 'application/x-shockwave-flash' },
        { property: 'og:video:width', content: 500 },
        { property: 'og:video:height', content: 300 },
        { property: 'og:video:alt', content: 'A shiny red apple with a bite taken out' },
      ]);
    });
  });

  describe('when audio is defined', () => {
    it('should provide the basic audio tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        audio: {
          src: 'http://example.com/sound.mp3',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:audio', content: 'http://example.com/sound.mp3' },
      ]);
    });

    it('should set the secure_url tag', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        audio: {
          src: 'https://example.com/sound.mp3',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:audio', content: 'https://example.com/sound.mp3' },
        { property: 'og:audio:secure_url', content: 'https://example.com/sound.mp3' },
      ]);
    });

    it('should provide all of the audio tags', () => {
      const config = {
        title: 'Some title',
        url: 'http://example.com/',
        type: 'website',
        audio: {
          src: 'http://example.com/sound.mp3',
          secureUrl: 'https://secure.example.com/sound.mp3',
          type: 'audio/mpeg',
        },
      };

      expect(getOpenGraphTags(config)).toEqual([
        { property: 'og:title', content: 'Some title' },
        { property: 'og:url', content: 'http://example.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:audio', content: 'http://example.com/sound.mp3' },
        { property: 'og:audio:secure_url', content: 'https://secure.example.com/sound.mp3' },
        { property: 'og:audio:type', content: 'audio/mpeg' },
      ]);
    });
  });
});
