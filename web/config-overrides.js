module.exports = function override(config, env) {
  return {
    ...config,
    externals: {
      axios: 'axios',
      lodash: '_',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  };
};
