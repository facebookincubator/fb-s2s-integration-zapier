// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

const EventResource = require('./resources/event');

// We can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: {
    type: 'custom',
    test: (z, bundle) => !!bundle.authData.accessToken,
    fields: [
      {
          key: 'accessToken',
          required: true,
          label: 'Access Token',
          type: 'string',
          helpText: 'Access Token you generated for your pixel, go to [this page](https://developers.facebook.com/docs/marketing-api/facebook-pixel/server-side-api#access-token) for more info.'
      },
    ]
  },


  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [],

  afterResponse: [],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: { [EventResource.key]: EventResource, },

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {}
};

// Finally, export the app.
module.exports = App;
