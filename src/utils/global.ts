export function getGraphqlEndpoint(): string {
  let GRAPHQL_ENDPOINT =
    'https://master-gateway-api-server-portal-nhvr.azurewebsites.net/api/graphql';

  const remoteAPIServer =
    window.globalEnvVariables?.connectors.remoteAPI.server;
  if (
    remoteAPIServer !== undefined &&
    remoteAPIServer !== '#{CLIENT_GRAPHQL_ENDPOINT}#'
  ) {
    GRAPHQL_ENDPOINT = remoteAPIServer;
  }
  return GRAPHQL_ENDPOINT;
}

export function getRecaptchaSiteKey(): string {
  let recaptchaSiteKey = '6LeyL8EZAAAAALvrL2r5i2oib4kBUUQXbR0B5wlY';
  const remoteGoogleRecaptchaAPIKey =
    window.globalEnvVariables?.connectors.remoteGoogleRecaptchaAPI.key;
  if (
    remoteGoogleRecaptchaAPIKey !== undefined &&
    remoteGoogleRecaptchaAPIKey !== '#{CLIENT_GOOGLE_RECAPTCHA_KEY}#'
  ) {
    recaptchaSiteKey = remoteGoogleRecaptchaAPIKey;
  }
  return recaptchaSiteKey;
}

declare global {
  interface Window {
    globalEnvVariables: {
      connectors: {
        remoteAPI: {
          server: string;
        };
        websocketAPI: {
          server: string;
        };
        remoteStorage: {
          server: string;
        };
        remoteAnalyticsAPI: {
          key: string;
        };
        remoteGoogleAnalyticsAPI: {
          key: string;
        };
        remoteGoogleRecaptchaAPI: {
          key: string;
        };
        remoteGoogleGeoAPI: {
          server: string;
          key: string;
        };
      };
      author: string;
      name: string;
      code: string;
      copyright: string;
      version: string;
      build: string;
      buildTimestamp: string;
      remoteENV: string;
    };
  }
}
