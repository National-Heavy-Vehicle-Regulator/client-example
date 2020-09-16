// eslint-disable-next-line import/no-extraneous-dependencies
import {configureAxe} from 'jest-axe';

// eslint-disable-next-line import/prefer-default-export
export const axe = configureAxe({
  rules: {
    region: {enabled: false},
    'landmark-complementary-is-top-level': {enabled: false},
    'scrollable-region-focusable': {enabled: false},
  },
});
