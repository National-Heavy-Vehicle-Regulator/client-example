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
