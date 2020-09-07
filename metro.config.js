const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      sourceExts: [
        ...sourceExts,
        'jsx',
        'js',
        'json',
        'sass',
        'scss',
        'tsx',
        'ts',
      ],
    },
  };
})();
