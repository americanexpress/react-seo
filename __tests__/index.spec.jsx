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
import SEO from '../src';

jest.mock('react-helmet', () => ({ Helmet: 'Helmet' }));

describe('SEO', () => {
  it('should render the snapshot correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        canonical="https://example.com/foo/bar"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render articles correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        article={true}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render images correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        image={{
          src: '/foo.png',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render images pathnames correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        pathname="/foo"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const component = shallow(
      <SEO
        author="John Doe"
        description="Lorem ipsum sat delor."
        keywords={['foo', 'bar']}
        siteUrl="https://example.com"
        title="Lorem Ipsum"
        pathname="/foo"
      >
        <script src="https://example.com/foo.js" />
      </SEO>
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
