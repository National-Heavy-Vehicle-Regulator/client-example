/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import 'jest-styled-components';

// eslint-disable-next-line no-undef
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: jest.fn(),
  },
});
