/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-var */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-rest-params */
'use strict';

if (document.all && !document.addEventListener) {
  alert('You are using an unsupported browser.');
  window.location.assign('http://outdatedbrowser.com/en');
}
window.globalEnvVariables = {
  connectors: {
    remoteAPI: {
      server: '#{CLIENT_GRAPHQL_ENDPOINT}#',
    },
  },
};
