<h1 align="center">
  <img src='https://github.com/americanexpress/react-seo/raw/master/react-seo.png' alt="React SEO" width='50%'/>
</h1>

[![npm version](https://badge.fury.io/js/%40americanexpress%2Freact-seo.svg)](https://badge.fury.io/js/%40americanexpress%2Freact-seo)
[![Build Status](https://travis-ci.org/americanexpress/react-seo.svg?branch=master)](https://travis-ci.org/americanexpress/react-seo)

> Simple SEO tag manager for React

## 👩‍💻 Hiring 👨‍💻

Want to get paid for your contributions to `react-seo`?
> Send your resume to oneamex.careers@aexp.com

## 📖 Table of Contents

* [Usage](#Usage)
* [API](#API)
* [Contributing](#Contributing)

<br />

## 🤹‍ Usage

```bash
npm install @americanexpress/react-seo
```

<br />

Let's start with a minimal example of basic usage:

```javascript
import React from 'react';
import SEO from '@americanexpress/react-seo';

const MyModule = () => (
  <div>
    <SEO
      title="Lorem Ipsum"
      description="Lorem ipsum sat delor."
      keywords={['foo', 'bar']}
      siteUrl="http://example.com"
      image={{
        src: 'http://example.com/foo.jpg'
      }}
    />
  </div>
);

export default MyModule;
```

This will result in the following tags being added to the `head` element:

```html
<head>
  <title>Lorem Ipsum</title>
  <link rel="canonical" href="http://example.com">
  <meta property="og:url" content="http://example.com">
  <meta property="og:title" content="Lorem Ipsum">
  <meta property="og:description" content="Lorem ispum sat delor.">
  <meta property="og:image" content="http://example.com/foo.jpg">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Lorem Ipsum">
  <meta name="twitter:description" content="Lorem ispum sat delor.">
  <meta name="twitter:image" content="http://example.com/foo.jpg">
  <meta name="description" content="Lorem ispum sat delor.">
  <meta name="keywords" content="foo, bar">
</head>
```

Notice in the example above that the Open Graph and Twitter Card metadata is constructed from the `title`, `description`, and `image` props.  To override these values or add additional tags not provided by default, you may use the `openGraph` and `twitterCard` props.

```javascript
import React from 'react';
import SEO from '@americanexpress/react-seo';

const MyModule = () => (
  <div>
    <SEO
      title="Lorem Ipsum"
      description="Lorem ipsum sat delor."
      robots={['index', 'follow']}
      keywords={['foo', 'bar']}
      siteUrl="http://example.com"
      openGraph={{
        title: 'Facebook Lorem Ipsum',
        description: 'Facebook Lorem ipsum sat delor.',
        image: {
          src: 'http://example.com/facebook-foo.jpg',
          alt: 'Lorem ipsum',
        }
      }}
      twitterCard={{
        title: 'Twitter Lorem Ipsum',
        description: 'Twitter Lorem ipsum sat delor.',
        image: {
          src: 'http://example.com/twitter-foo.jpg',
          alt: 'Lorem ipsum',
        }
      }}
    />
  </div>
);

export default MyModule;
```

<br />

## 🎛️ API

The interface for `react-seo` is denoted below:

```javascript
SEO.propTypes = {
  title: string,
  description: string,
  canonical: string,
  image: shape({
    src: string,
    secureUrl: string,
    type: string,
    width: number,
    height: number,
    alt: string,
  }),
  video: shape({
    src: string,
    secureUrl: string,
    type: string,
    width: number,
    height: number,
    alt: string,
  }),
  openGraph: shape({
    type: string,
    url: string,
    title: string,
    description: string,
    determiner: string,
    locale: string,
    localeAlternate: string,
    siteName: string,
    image: shape({
      src: string,
      secureUrl: string,
      type: string,
      width: number,
      height: number,
      alt: string,
    }),
    video: shape({
      src: string,
      secureUrl: string,
      type: string,
      width: number,
      height: number,
      alt: string,
    }),
    audio: shape({
      src: string,
      secureUrl: string,
      type: string,
    }),
  }),
  twitterCard: shape({
    card: string,
    title: string,
    description: string,
    image: shape({
      src: string,
      alt: string,
    }),
    site: string,
    siteId: string,
    creator: string,
    creatorId: string,
    app: shape({
      country: string,
      iphone: shape({
        id: string,
        url: string,
        name: string,
      }),
      ipad: shape({
        id: string,
        url: string,
        name: string,
      }),
      googlePlay: shape({
        id: string,
        url: string,
        name: string,
      }),
    }),
    player: shape({
      src: string,
      width: number,
      height: number,
    }),
  }),
  keywords: arrayOf(string),
  robots: arrayOf(string),
  locale: string,
  meta: arrayOf(object),
  siteUrl: string,
};

SEO.defaultProps = {
  article: false,
  author: '',
  description: '',
  image: null,
  keywords: [],
  robots: [],
  locale: 'en-US',
  meta: [],
  pathname: '',
  siteUrl: '',
  title: '',
  canonical: '',
};
```

<br />

## 🏆 Contributing

We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/react-seo).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) for commit formatting details.

## 🗝️ License

Any contributions made under this project will be governed by the [Apache License
2.0](https://github.com/americanexpress/react-seo/blob/master/LICENSE.txt).

## 🗣️ Code of Conduct

This project adheres to the [American Express Community Guidelines](https://github.com/americanexpress/react-seo/wiki/Code-of-Conduct).
By participating, you are expected to honor these guidelines.
