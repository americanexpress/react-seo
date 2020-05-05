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
```javascript
import React from 'react';
import SEO from '@americanexpress/react-seo';

const MyModule = () => (
  <div>
    <SEO
      author="John Doe"
      description="Lorem ipsum sat delor."
      keywords={['foo', 'bar']}
      siteUrl="https://example.com"
      title="Lorem Ipsum"
      image="https://example.com/foo.png"
      meta=[{ charset: 'utf-8' }]
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
  article: PropTypes.bool,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
  }),
  keywords: PropTypes.arrayOf(PropTypes.string),
  locale: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  siteUrl: PropTypes.string,
  title: PropTypes.string,
  canonical: PropTypes.string,
};

SEO.defaultProps = {
  article: false,
  author: '',
  description: '',
  image: null,
  keywords: [],
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
