module.exports = function override(config, env) {
  return {
    ...config,
    externals: {
      lodash: '_',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  };
};
