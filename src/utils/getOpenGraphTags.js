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

import getTagsFromSchema from './getTagsFromSchema';
import {
  OPEN_GRAPH_BASE_SCHEMA,
  OPEN_GRAPH_AUDIO_SCHEMA,
  OPEN_GRAPH_IMAGE_SCHEMA,
  OPEN_GRAPH_VIDEO_SCHEMA,
} from './constants';

const getOpenGraphTags = ({
  image,
  video,
  audio,
  ...data
}) => {
  const withSecureUrl = (data_) => {
    const { secureUrl, src } = data_;

    return {
      ...data_,
      secureUrl: secureUrl || (src.startsWith('https') ? src : ''),
    };
  };

  return [
    ...getTagsFromSchema(OPEN_GRAPH_BASE_SCHEMA, data, 'property'),
    ...audio ? getTagsFromSchema(OPEN_GRAPH_AUDIO_SCHEMA, withSecureUrl(audio), 'property') : [],
    ...image ? getTagsFromSchema(OPEN_GRAPH_IMAGE_SCHEMA, withSecureUrl(image), 'property') : [],
    ...video ? getTagsFromSchema(OPEN_GRAPH_VIDEO_SCHEMA, withSecureUrl(video), 'property') : [],
  ];
};

export default getOpenGraphTags;
