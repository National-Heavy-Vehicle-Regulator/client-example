module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-max-length': [2, 'always', 140],
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [0, 'always'],
    },
  };
  