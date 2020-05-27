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

function getTagsFromSchema(schema, data, key = 'name') {
  return Object.entries(schema.properties).reduce((collection, property) => {
    const [name, value] = property;

    if (!data[name]) {
      return collection;
    }

    if (typeof value === 'string') {
      return [
        ...collection,
        { [key]: value, content: data[name] },
      ];
    }

    return [
      ...collection,
      ...getTagsFromSchema(value, data[name]),
    ];
  }, []);
}

export default getTagsFromSchema;
