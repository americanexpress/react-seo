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

const provideDefaults = (baseConfig = {}, defaults) => Object.entries(defaults)
  .reduce((base, property) => {
    const [name, value] = property;

    if (!base[name]) {
      return {
        ...base,
        [name]: value,
      };
    }

    return base;
  }, baseConfig);

export default provideDefaults;
