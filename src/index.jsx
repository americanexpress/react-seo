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

const SEO = ({
  article,
  author,
  children,
  description,
  image: metaImage,
  keywords,
  lang,
  meta,
  pathname,
  siteUrl,
  title,
}) => {
  const image = metaImage && metaImage.src ? `${siteUrl}${metaImage.src}` : null;

  const canonical = pathname ? `${siteUrl}${pathname}` : null;

  const link = canonical ? [{ rel: 'canonical', href: canonical }] : [];

  let metaTags = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords.join(','),
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: article ? 'article' : 'website',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    ...meta,
  ];

  if (metaImage) {
    metaTags = [
      ...metaTags,
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'og:image:width',
        content: metaImage.width,
      },
      {
        property: 'og:image:height',
        content: metaImage.height,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ];
  } else {
    metaTags = [
      ...metaTags,
      {
        name: 'twitter:card',
        content: 'summary',
      },
    ];
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      link={link}
      meta={metaTags}
    >
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  article: PropTypes.bool,
  author: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
  }),
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  siteUrl: PropTypes.string,
  title: PropTypes.string,
};

SEO.defaultProps = {
  article: false,
  author: '',
  children: null,
  description: '',
  image: null,
  keywords: [],
  lang: 'en-US',
  meta: [],
  pathname: '',
  siteUrl: '',
  title: '',
};

export default SEO;
