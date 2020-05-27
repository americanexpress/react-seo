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

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { getOpenGraphTags, getTwitterCardTags, provideDefaults } from '../utils';
import { openGraphShape, twitterCardShape } from '../shapes';

const SEO = ({
  siteUrl,
  title,
  description,
  locale,
  titleTemplate,
  canonical,
  keywords,
  openGraph,
  twitterCard,
  image,
  video,
}) => {
  const canonicalUrl = canonical || siteUrl;

  const link = [{ rel: 'canonical', href: canonicalUrl }];

  const openGraphConfig = provideDefaults(openGraph, {
    title,
    description,
    image,
    video,
    locale,
    url: canonicalUrl,
    type: 'website',
  });

  const twitterCardConfig = provideDefaults(twitterCard, {
    title,
    description,
    image,
    video,
    card: 'summary',
  });

  const meta = [
    ...getOpenGraphTags(openGraphConfig),
    ...getTwitterCardTags(twitterCardConfig),
  ];

  if (description) {
    meta.push({ name: 'description', content: description });
  }

  if (keywords.length > 0) {
    meta.push({ name: 'keywords', content: keywords.join(',') });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      titleTemplate={titleTemplate}
      link={link}
      meta={meta}
    >
      {title && <title>{title}</title>}
    </Helmet>
  );
};

SEO.propTypes = {
  siteUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  locale: PropTypes.string,
  titleTemplate: PropTypes.string,
  canonical: PropTypes.string,
  openGraph: openGraphShape,
  twitterCard: twitterCardShape,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    url: PropTypes.string,
    secureUrl: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    type: PropTypes.string,
    alt: PropTypes.string,
  }),
  video: PropTypes.shape({
    url: PropTypes.string,
    secureUrl: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
  }),
};

SEO.defaultProps = {
  description: '',
  locale: 'en-US',
  titleTemplate: '',
  canonical: '',
  keywords: [],
  image: undefined,
  video: undefined,
  openGraph: undefined,
  twitterCard: undefined,
};

export default SEO;
