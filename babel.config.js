module.exports = function(api) {
  const isTest = api.env('test');
  // You can use isTest to determine what presets and plugins to use.
  if (isTest) {
    return {
      plugins: ['@babel/plugin-syntax-dynamic-import'],
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        ['@babel/preset-env', { 'targets': { 'node': 'current' } }],
      ],
    };
  }
  return {
    plugins: ['@babel/plugin-syntax-dynamic-import', ["ramda", {
      "useES": true
    }], [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          'transform': '@material-ui/core/esm/${member}',
          'preventFullImport': true
        },
        '@material-ui/icons': {
          'transform': '@material-ui/icons/esm/${member}',
          'preventFullImport': true
        }
      }
    ]],
    presets: [
      '@babel/preset-typescript',
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          targets: {
            ie: '11',
          },
        },
      ],
    ],
  };
};
