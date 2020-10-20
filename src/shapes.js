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

import { string, number, shape } from 'prop-types';

export const openGraphVisualShape = shape({
  src: string,
  secureUrl: string,
  type: string,
  width: number,
  height: number,
  alt: string,
});

export const openGraphAudioShape = shape({
  src: string,
  secureUrl: string,
  type: string,
});

export const openGraphShape = shape({
  type: string,
  url: string,
  title: string,
  description: string,
  determiner: string,
  locale: string,
  localeAlternate: string,
  siteName: string,
  image: openGraphVisualShape,
  video: openGraphVisualShape,
  audio: openGraphAudioShape,
});

export const twitterCardImageShape = shape({
  src: string,
  alt: string,
});

export const twitterCardAppShape = shape({
  id: string,
  url: string,
  name: string,
});

export const twitterCardAppsShape = shape({
  country: string,
  iphone: twitterCardAppShape,
  ipad: twitterCardAppShape,
  googlePlay: twitterCardAppShape,
});

export const twitterCardPlayerShape = shape({
  src: string,
  width: number,
  height: number,
});

export const twitterCardShape = shape({
  card: string,
  title: string,
  description: string,
  image: twitterCardImageShape,
  site: string,
  siteId: string,
  creator: string,
  creatorId: string,
  app: twitterCardAppsShape,
  player: twitterCardPlayerShape,
});

export const alternateLinkShape = shape({
  hreflang: string,
  href: string,
});
