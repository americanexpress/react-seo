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
import { shallow } from 'enzyme';
import SEO from '../../src';

jest.mock('react-helmet', () => ({ Helmet: 'Helmet' }));

describe('SEO', () => {
  it('should render correctly with the minimal tags', () => {
    const component = shallow(
      <SEO
        title="Lorem Ipsum"
        siteUrl="https://example.com"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should provide the canonical URL', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        canonical="https://example.com/index.html"
      />
    );

    const helmet = component.find('Helmet');
    const { link } = helmet.props();

    expect(link).toEqual([{
      rel: 'canonical', href: 'https://example.com/index.html',
    }]);
  });

  it('should provide the robots', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        robots={['index', 'follow']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        canonical="https://example.com/index.html"
      />
    );

    const helmet = component.find('Helmet');
    const { meta } = helmet.props();

    const robots = meta.find((tag) => tag.name === 'robots');

    expect(robots).toMatchObject({
      name: 'robots', content: 'index,follow',
    });
  });

  it('should render image tags correctly', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        image={{
          src: 'http://example.com/ogp.jpg',
          type: 'image/jpeg',
          width: 500,
          height: 300,
          alt: 'A shiny red apple with a bite taken out',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render video tags correctly', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        video={{
          src: 'http://example.com/movie.swf',
          type: 'application/x-shockwave-flash',
          width: 500,
          height: 300,
          alt: 'A shiny red apple with a bite taken out',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render Open Graph tags correctly', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        openGraph={{
          title: 'Open Graph Title',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render Twitter Card tags correctly', () => {
    const component = shallow(
      <SEO
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        twitterCard={{
          title: 'Twitter Card Title',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render Helmet props correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        canonical="https://example.com/foo/bar"
        defaultTitle="Curabitur pretium tincidunt lacus."
        defer={false}
        encodeSpecialCharacters={true}
        onChangeClientState={jest.fn()}
        titleTemplate={null}
        zipTies={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
