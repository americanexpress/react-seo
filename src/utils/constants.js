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

export const OPEN_GRAPH_BASE_SCHEMA = {
  properties: {
    title: 'og:title',
    url: 'og:url',
    type: 'og:type',
    description: 'og:description',
    determiner: 'og:determiner',
    locale: 'og:locale',
    localeAlternate: 'og:locale:alternate',
    siteName: 'og:site_name',
  },
  required: ['title', 'url', 'type'],
};

export const OPEN_GRAPH_VIDEO_SCHEMA = {
  properties: {
    src: 'og:video',
    secureUrl: 'og:video:secure_url',
    type: 'og:video:type',
    width: 'og:video:width',
    height: 'og:video:height',
    alt: 'og:video:alt',
  },
  required: ['src'],
};

export const OPEN_GRAPH_AUDIO_SCHEMA = {
  properties: {
    src: 'og:audio',
    secureUrl: 'og:audio:secure_url',
    type: 'og:audio:type',
  },
  required: ['src'],
};

export const OPEN_GRAPH_IMAGE_SCHEMA = {
  properties: {
    src: 'og:image',
    secureUrl: 'og:image:secure_url',
    type: 'og:image:type',
    width: 'og:image:width',
    height: 'og:image:height',
    alt: 'og:image:alt',
  },
  required: ['src'],
};

export const TWITTER_APP_CARD_SCHEMA = {
  properties: {
    card: 'twitter:card',
    site: 'twitter:site',
    title: 'twitter:title',
    description: 'twitter:description',
    app: {
      properties: {
        country: 'twitter:app:country',
        iphone: {
          properties: {
            id: 'twitter:app:id:iphone',
            url: 'twitter:app:url:iphone',
            name: 'twitter:app:name:iphone',
          },
          required: ['id'],
        },
        ipad: {
          properties: {
            id: 'twitter:app:id:ipad',
            url: 'twitter:app:url:ipad',
            name: 'twitter:app:name:ipad',
          },
          required: ['id'],
        },
        googlePlay: {
          properties: {
            id: 'twitter:app:id:googleplay',
            url: 'twitter:app:url:googleplay',
            name: 'twitter:app:name:googleplay',
          },
          required: ['id'],
        },
      },
    },
  },
  required: ['card', 'title', 'site', 'app'],
};

export const TWITTER_PLAYER_CARD_SCHEMA = {
  properties: {
    card: 'twitter:card',
    site: 'twitter:site',
    title: 'twitter:title',
    description: 'twitter:description',
    player: {
      properties: {
        src: 'twitter:player',
        width: 'twitter:player:width',
        height: 'twitter:player:height',
      },
      required: ['src', 'width', 'height'],
    },
    image: {
      properties: {
        src: 'twitter:image',
        alt: 'twitter:image:alt',
      },
      required: ['src'],
    },
  },
  required: ['card', 'title', 'site', 'player'],
};

export const TWITTER_SUMMARY_CARD_SCHEMA = {
  properties: {
    card: 'twitter:card',
    site: 'twitter:site',
    title: 'twitter:title',
    description: 'twitter:description',
    image: {
      properties: {
        src: 'twitter:image',
        alt: 'twitter:image:alt',
      },
      required: ['src'],
    },
  },
  required: ['card', 'title'],
};
